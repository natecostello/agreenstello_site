import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link, graphql } from "gatsby"
//import Layout from "../components/layout"
import PageTitle from "../components/PageTitle"
import { PageBody } from "../components/styles"

export default function CategoryPageTemplate({ data }) {
  const { mdx, articles, deprecatedArticles } = data
  //const { articles } = data
  //console.log("printing page context:")
  //console.log(JSON.stringify(pageContext))
  return (
    <>
      <PageTitle>{mdx.frontmatter.title}</PageTitle>
      <PageBody>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <h1>Articles</h1>
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
        <h1>Deprecated Articles</h1>
        {deprecatedArticles.edges.map(({ node }) => (
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
      </PageBody>
    </>
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
  query($slug: String!, $categories: [String!]) {
    mdx: mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
    articles: allMdx(
      filter: {
        frontmatter: {
          type: { eq: "article" }
          categories: { in: $categories }
          metatags: { nin: ["deprecated"] }
        }
      }
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
    deprecatedArticles: allMdx(
      filter: {
        frontmatter: {
          type: { eq: "article" }
          categories: { in: $categories }
          metatags: { in: ["deprecated"] }
        }
      }
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
