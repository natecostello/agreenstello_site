

import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

export const Post = styled.article`
  height: 100%;
  width: 100%;
  display: grid;
  border-radius: 0.5em;
  border: 1px solid var(--color-shadow);
  box-shadow: 0 0 1em var(--color-shadow);
  overflow: hidden;
  > :not(:first-child) {
    margin-left: 20px;
    margin-right: 20px;
  }
  > :last-child {
    margin-bottom: 0.5em;
  }
`

export const Cover = styled(GatsbyImage)`
//   height: calc(10em + 4vh);
  z-index: -1;
  height: 100%
  width: 100%;
  object-fit: cover;
  filter: brightness(0.3) contrast(1.1);
`