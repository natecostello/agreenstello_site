import * as React from "react"
// import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
// import Seo from "../components/seo"

import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import PageTitle from "../components/PageTitle"
import { PageBody } from "../components/styles"

import { getImage } from "gatsby-plugin-image"


export default function IndexPage({ data }) {
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
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </PageBody>
    </>
    /*     <Layout>
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
    </Layout> */
  )
}

export const query = graphql`
  {
    mdx(frontmatter: { type: { eq: "landingpage" } }) {
      id
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
