import styled from 'styled-components'

import { Button } from '../buttons/Primary'

const StyledProductCard = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, auto);
  gap: 0 1rem;
  > * {
    grid-column: 2/3;
    margin-top: 0;
  }
  > img {
    grid-column: 1/2;
    grid-row: 1/6;
    object-fit: fill;
    height: 100%;
    width: 100%;
  }

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
