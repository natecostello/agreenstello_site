import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link, graphql } from "gatsby"

export default function CategoryPageTemplate({ data }) {
  const { mdx, articles } = data
  //const { articles } = data
  //console.log("printing page context:")
  //console.log(JSON.stringify(pageContext))
  return (
    <div>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXRenderer>{mdx.body}</MDXRenderer>

      {articles.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title}
              {"  "}
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

// export const query = graphql`
//   query($slug: String!) {
//     mdx(fields: { slug: { eq: $slug } }) {
//       body
//       frontmatter {
//           title
//       }
//     }
//   }
// `
// future query
export const query = graphql`
  query($slug: String!, $categories: String!) {
    mdx: mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
    articles: allMdx(
      filter: { frontmatter: { categories: { eq: $categories } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
          excerpt
        }
      }
    }
  }
`
