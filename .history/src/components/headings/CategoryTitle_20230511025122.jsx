import LottieCategory from '../animations/titleAnimations/LottieCategory'
import styled from 'styled-components'

import { Div, StyledLOttie, StyledTitle, H1 } from './TitleStyles'

const CategoryTitle = ({ heading }) => {
  return (
    <Div>
      <StyledLOttie>
        <LottieCategory />
      </StyledLOttie>
      <StyledTitle>
        <H1>{heading}</H1>
      </StyledTitle>
    </Div>
  )
}

export default CategoryTitle
