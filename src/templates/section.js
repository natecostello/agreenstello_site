import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link, graphql } from "gatsby"
//import Layout from "../components/layout"
import PageTitle from "../components/PageTitle"
import { PageBody } from "../components/styles"

export default function SectionPageTemplate({ data }) {
  const { mdx, categories } = data
  //const { articles } = data
  //console.log("printing page context:")
  //console.log(JSON.stringify(pageContext))
  return (
    <>
      <PageTitle>{mdx.frontmatter.title}</PageTitle>
      <PageBody>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <h1>Categories in this Section</h1>
        {categories.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                Things related to{" "}
                {node.frontmatter.categories}
                {"  "}
              </h3>
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
  query($slug: String!, $section: String!) {
    mdx: mdx(fields: { slug: { eq: $slug } }) 
    {
      body
      frontmatter {
        title
      }
    }
    categories: allMdx(
      filter: {
        frontmatter: {
          type: { eq: "categorypage" }
          section: { eq: $section }
        }
      }
    ) {
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
  }
`
