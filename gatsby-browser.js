import { PageComponents, Providers } from '/src/components/Global'
import React from 'react'

import "./src/styles/global.css"

// export const wrapRootElement = ({ element }) => {
//   return <Providers>{element}</Providers>
// }

export const wrapPageElement = ({ element, props }) => {
  return <PageComponents {...props}>{element}</PageComponents>
}
