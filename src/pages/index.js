import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function IndexPage({ data }) {
  const { mdx } = data
  return (
    <Layout>
      <Seo title="Home" />
      <MDXRenderer>{mdx.body}</MDXRenderer>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  )
}

export const query = graphql`
  {
    mdx(frontmatter: { level: { eq: 0 } }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
