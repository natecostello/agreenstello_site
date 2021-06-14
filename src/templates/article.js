import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
// import Layout from "../components/layout"
import PageTitle from "../components/PageTitle"
import { PageBody } from "../components/styles"

import { getImage } from "gatsby-plugin-image"


export default function ArticleTemplate({ data }) {
  const { mdx } = data
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
      </PageBody>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
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
  }
`
