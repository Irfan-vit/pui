import LottieFeatured from '../animations/titleAnimations/LottieFeatured'
import styled from 'styled-components'

import { Div, StyledLOttie, StyledTitle, H1 } from './TitleStyles'

const FeaturedTitle = ({ heading }) => {
  return (
    <Div>
      <StyledLOttie>
        <LottieFeatured />
      </StyledLOttie>
      <StyledTitle>
        <H1>{heading}</H1>
      </StyledTitle>
    </Div>
  )
}

export default FeaturedTitle
