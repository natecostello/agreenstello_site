import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
// import { FooterDiv, PoweredBy, Icons } from "./styles"
import { FooterDiv } from "./styles"

// import Rss from '../Rss'

export default function Footer() {
/*   const { contentYaml } = useStaticQuery(graphql`
    {
      contentYaml {
        sourceNote
        copyright
        poweredBy {
          title
          url
        }
      }
    }
  `) */
  const data = useStaticQuery(graphql`
    {
      site {
        buildTimeZone
      }
    }
  `)
//  const { copyright, sourceNote, poweredBy } = contentYaml
  return (
    <FooterDiv>
      A work in progress. Statically built{" "}
      {data.site.buildTimeZone}
      {" "}
      according to
      {" "}
      <a href="https://github.com/natecostello/agreenstello_site">this code</a>
      {" "}
      and
      {" "}
       <a href="https://github.com/natecostello/van_two_point_oh">this content</a>
      {" "}
      .
      {/*  <span>
        © {new Date().getFullYear()} - {copyright}
        &emsp; <Rss />
      </span>
      <span dangerouslySetInnerHTML={{ __html: sourceNote }} />
      <PoweredBy>
        Powered by&ensp;
        {poweredBy.map(({ url, title }) => {
          const Icon = Icons[title]
          return (
            <a key={title} href={url} aria-label={title}>
              <Icon size="1.4em" />
            </a>
          )
        })}
      </PoweredBy> */}
    </FooterDiv>
  )
}
