import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
// import Layout from "../components/layout"
import PageTitle from "../components/PageTitle"
import { PageBody } from "../components/styles"


export default function ArticleTemplate({ data }) {
  const { mdx } = data
  return (
    <>
      <PageTitle>{mdx.frontmatter.title}</PageTitle>
      <PageBody>
        <MDXRenderer>{mdx.body}</MDXRenderer>
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
      }
    }
  }
`
