import { graphql, useStaticQuery } from "gatsby"
// import { useOnClickOutside } from "../../hooks"
import React, { useRef, useState, useEffect } from "react"
import { NavDiv, NavLink, NavToggle } from "./styles"
import { globalHistory } from "@reach/router"

export default function Nav(props) {
  /*   const { nav } = useStaticQuery(graphql`
    {
      nav: allNavYaml {
        nodes {
          title
          url
        }
      }
    }
  `) */
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
  const ref = useRef()
  const [open, setOpen] = useState(false)
  // useOnClickOutside(ref, () => open && setOpen(false))
  // close mobile nav on route changes, would remain open because part of wrapPageElement
  useEffect(() => globalHistory.listen(() => setOpen(false)), [])
  return (
    <>
      <NavToggle opener open={open} onClick={() => setOpen(true)} />
      <NavDiv
        ref={ref}
        open={open}
        onScroll={e => e.preventDefault()}
        {...props}
      >
        <NavToggle open={open} onClick={() => setOpen(false)} />
        {categoryPages.edges.map(({ node }) => (
          <NavLink key={"/" + node.slug} to={"/" + node.slug}>
            {node.frontmatter.navTitle}
          </NavLink>
        ))}
      </NavDiv>
    </>
  )
}
