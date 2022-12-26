

import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

export const Post = styled.article`
  background: var(--color-level-one);
  height: fit-content;
  width: 100%;
  display: grid;
  border-radius: 0.5em;
  border: 1px solid var(--color-shadow);
  box-shadow: 2px 2px 3px var(--color-shadow);
  overflow: hidden;
  > :not(:first-child) {
    margin-left: 20px;
    margin-right: 20px;
  }
  //> :last-child {
  //  margin-bottom: 0.5em;
  //}
`
// height: 100%;
  


export const Cover = styled(GatsbyImage)`
  position: absolute  // !important;
  z-index: -1;
  height: auto //did nothing
  width: auto //did nothing
  object-fit: cover;
  filter: brightness(0.3) contrast(1.1);
`

// height: calc(10em + 4vh);
// height: 100%
// width: 100%;
