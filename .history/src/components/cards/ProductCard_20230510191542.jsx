import styled from 'styled-components'

import { Button } from '../buttons/Primary'

const StyledProductCard = styled.article`
  display: flex;
  flex-flow: row wrap;
  @media (min-width: 550px) {
  }
  @media (min-width: 900px) {
    flex-flow: column wrap;
  }
`

const ProductCard = (props) => {
  return (
    <StyledProductCard>
      <h4>{props.title}</h4>
      <h3>Nike Air Max</h3>
      <div></div>
      <img src={props.imgSrc} alt="image" />
    </StyledProductCard>
  )
}

export default ProductCard
