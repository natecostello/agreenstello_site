// import styled, { css } from 'styled-components'
import styled from "styled-components"
import { Grid } from "../styles"
import { mediaQueries } from "../../utils/mediaQueries"

export const PostGrid = styled(Grid)`
  height: max-content;
  ${mediaQueries.maxPhablet} {
    grid-column: 3;
    justify-self: center;
  }
  ${mediaQueries.minPhablet} {
    grid-column: 2/-2;
  }
`
