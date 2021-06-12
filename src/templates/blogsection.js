import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link, graphql } from "gatsby"
//import Layout from "../components/layout"
import PageTitle from "../components/PageTitle"
import { PageBody } from "../components/styles"

import { getImage } from "gatsby-plugin-image"

export default function SectionPageTemplate({ data }) {
  const { mdx, posts } = data
  const { frontmatter, body } = mdx
  const { title, cover } = frontmatter
  const image = getImage(cover?.img)
  
  return (
    <>
      <PageTitle img={image}>
        <h1>{title}</h1>
      </PageTitle>
      <PageBody>
        <MDXRenderer>{body}</MDXRenderer>
        <h1>Blog Posts</h1>
        {posts.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title}
                {"  "}
              </h3>
            </Link>
            <p>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
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
    mdx: mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        cover {
          img {
            childImageSharp {
              gatsbyImageData(transformOptions: { grayscale: true })
            }
          }
        }
      }
    }
    posts: allMdx(
      filter: {
        frontmatter: { type: { eq: "post" }, section: { eq: $section } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
          excerpt
        }
      }
    }
  }
`
