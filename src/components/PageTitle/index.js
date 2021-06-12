import React from 'react'
// import { Caption } from '../styles'
import { Image, PageTitleDiv } from './styles'
import { GatsbyImage } from "gatsby-plugin-image"

export default function PageTitle(props) {
  const { children, img, source, caption, url, ...rest } = props
  return (
    <PageTitleDiv {...rest}>
      <Image image={img} />
      {/* <GatsbyImage image={img}/> */}
      {children}
    </PageTitleDiv>
  )
}
