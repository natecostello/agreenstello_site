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
      <PageTitle>
        <h1>{mdx.frontmatter.title}</h1>
      </PageTitle>
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
