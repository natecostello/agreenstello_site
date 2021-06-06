import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql, Link } from "gatsby"

const Logo = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       file(name: { eq: "gatsby-icon" }, extension: { eq: "png" }) {
//         childImageSharp {
//           fluid(maxWidth: 50, pngQuality: 80) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)
//   return <GatsbyImage image={data.file.childImageSharp.fluid} alt="logo" />
  return (
    <Link
      to={"/"}
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      GS
    </Link>
  )
}

export default Logo
