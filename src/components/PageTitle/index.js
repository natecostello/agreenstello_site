import React from 'react'
// import { Caption } from '../styles'
import { PageTitleDiv } from './styles'

export default function PageTitle(props) {
  const { children } = props
  return (
    <PageTitleDiv>
      {children}
    </PageTitleDiv>
  )
}
