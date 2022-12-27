/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

const categoryTemplate = path.resolve(`./src/templates/category.js`)
const articleTemplate = path.resolve(`./src/templates/article.js`)
const sectionTemplate = path.resolve(`./src/templates/section.js`)
const blogSectionTemplate = path.resolve(`./src/templates/blogsection.js`)
const postTemplate = path.resolve(`./src/templates/post.js`)

const query = `
{
  categorypages: allMdx(filter: {frontmatter: {type: {eq: "categorypage"}}}) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          categories
        }
      }
    }
  }
  articles: allMdx(filter: {frontmatter: {type: {eq: "article"}}}) {
    edges {
      node {
        fields {
          slug
        }
      }
    }
  }
  sectionpages: allMdx(filter: {frontmatter: {type: {eq: "sectionpage"}}}) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          section
        }
      }
    }
  }
  posts: allMdx(filter: {frontmatter: {type: {eq: "post"}}}) {
    edges {
      node {
        fields {
          slug
        }
      }
    }
  }
}
`

const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  //   if (node.internal.type === "Mdx" && node.frontmatter.level === 1) {
  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode, basePath: `content` })
    console.log("Creating Node with slug: " + slug)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }

  // Implementing excerpt separators per
  // https://suhasdara.me/blogs/gatsby-mdx-excerpts

  const fm = "---" //frontmatter
  const end = "<!--excerpt-->" //excerpt separator
  const prune = 200 //default prune length
  if (node.internal.type === `Mdx`) {
    let content = node.internal.content
    let fmStart = content.indexOf(fm)
    let fmEnd = content.indexOf(fm, fmStart + 1) + fm.length
    let excerptEnd = content.indexOf(end)
    let ellipsis = excerptEnd === -1 ? "..." : ""
    excerptEnd =
      excerptEnd === -1 ? Math.min(content.length, fmEnd + prune) : excerptEnd
    let excerpt = content.substring(fmEnd, excerptEnd) + ellipsis
    excerpt = excerpt.trim()

    createNodeField({
      node,
      name: `excerpt`,
      value: excerpt,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(query)
  if (result.errors) throw new Error(response.errors)
  const { categorypages, articles, sectionpages, posts } = result.data
  const { createPage } = actions

  categorypages.edges.forEach(({ node }) => {
    const slug = node.fields.slug
    const categories = node.frontmatter.categories
    console.log("creating category page :" + slug)
    console.log("page categories:" + categories)
    createPage({
      path: slug,
      component: categoryTemplate,
      context: {
        slug: slug,
        categories: categories,
      },
    })
  })

  articles.edges.forEach(({ node }) => {
    const slug = node.fields.slug
    console.log("creating article page :" + slug)
    createPage({
      path: slug,
      component: articleTemplate,
      context: {
        slug: slug,
      },
    })
  })

  sectionpages.edges.forEach(({ node }) => {
    const slug = node.fields.slug
    const section = node.frontmatter.section
    console.log("creating section page :" + slug)

    if (section === "blog") {
      createPage({
        path: slug,
        component: blogSectionTemplate,
        context: {
          slug: slug,
          section: section,
        },
      })
    } else {
      createPage({
        path: slug,
        component: sectionTemplate,
        context: {
          slug: slug,
          section: section,
        },
      })
    }
  })

  posts.edges.forEach(({ node }) => {
    const slug = node.fields.slug
    console.log("creating page blog post :" + slug)
    createPage({
      path: slug,
      component: postTemplate,
      context: {
        slug: slug,
      },
    })
  })
}

// // create article pages
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     query {
//       allMdx(filter: { frontmatter: { type: { eq: "article" } } }) {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   result.data.allMdx.edges.forEach(({ node }) => {
//       createPage({
//           path: node.fields.slug,
//           component: path.resolve(`./src/templates/article.js`),
//           context: {
//               // data that the template needs
//               slug: node.fields.slug,
//           },
//       })
//   });
// }
