/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
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

// create category pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx(filter: { frontmatter: { level: { eq: 1 } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/category.js`),
          context: {
              // data that the template needs
              slug: node.fields.slug,
          },
      })
  });
}
