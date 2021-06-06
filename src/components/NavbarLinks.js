import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const NavbarLinks = () => {
  const { categoryPages } = useStaticQuery(graphql`
    {
      categoryPages: allMdx(
        filter: { frontmatter: { type: { eq: "categorypage" } } }
      ) {
        edges {
          node {
            slug
            frontmatter {
              navTitle
            }
          }
        }
      }
    }
  `)

  return (
    <>
    {categoryPages.edges.map(({ node }) => (
        // <Link to={slug}>{navTitle}</Link>
        <Link to={"/" + node.slug}>{node.frontmatter.navTitle}</Link>
    ))}
    </>
  )
}

export default NavbarLinks
