import styled from 'styled-components'

import { Button } from '../buttons/Primary'

const StyledProductCard = styled.article`
  display: flex;
  fle

  @media (min-width: 1000px) {
  }
`

const ProductCard = (props) => {
  return (
    <StyledProductCard>
      <h4>{props.title}</h4>
      <h3>Nike Air Max</h3>
      <img src={props.imgSrc} alt="image" />
    </StyledProductCard>
  )
}

export default ProductCard
