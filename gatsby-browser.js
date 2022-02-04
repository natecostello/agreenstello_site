import { PageComponents, Providers } from '/src/components/Global'
import React from 'react'

import "./src/styles/global.css"

//Added for Katex, note this is from https://github.com/gatsbyjs/gatsby/issues/21866#issuecomment-645053574
// Instead of doc install which says to add to teemplate
import "katex/dist/katex.min.css"

// export const wrapRootElement = ({ element }) => {
//   return <Providers>{element}</Providers>
// }

export const wrapPageElement = ({ element, props }) => {
  return <PageComponents {...props}>{element}</PageComponents>
}
