/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

const categoryTemplate = path.resolve(`./src/templates/category.js`)
const articleTemplate = path.resolve(`./src/templates/article.js`)

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
}
`

const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  //   if (node.internal.type === "Mdx" && node.frontmatter.level === 1) {
  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode, basePath: `content` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}


exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(query)
  if (result.errors) throw new Error(response.errors)
  const { categorypages, articles } = result.data
  const { createPage } = actions

  categorypages.edges.forEach(({ node }) => {
    const slug = node.fields.slug
    const categories = node.frontmatter.categories
    console.log("creating page :" + slug)
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
    console.log("creating page :" + slug)
    createPage({
      path: slug,
      component: articleTemplate,
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
