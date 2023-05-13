import styled from 'styled-components'

import { Button } from '../buttons/Primary'

import { FaShoppingCart, FaHeart } from 'react-icons/fa'

const StyledProductCard = styled.article`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  @media (min-width: 550px) {
  }
  @media (min-width: 900px) {
    flex-flow: column wrap;
  }
  > button {
    margin: 0 auto;
    display: inline;
  }
`
const StyledImageWrapper = styled.div``

const StyledIconsWrapper = styled.div`
  position: absolute;
  right: 0;
  top 0;
`

const ProductCard = (props) => {
  return (
    <StyledProductCard>
      <h4>{props.categoryName}</h4>
      <h3>{props.title}</h3>
      <StyledImageWrapper>
        <img src={props.imgSrc} alt="image" />
      </StyledImageWrapper>

      <h3>R{props.price}</h3>
      <h3>{props.rating}</h3>
      <StyledIconsWrapper>
        <a href="">
          <FaHeart />
        </a>
        <a href="">
          <FaShoppingCart />
        </a>
      </StyledIconsWrapper>
      <Button>view more</Button>
    </StyledProductCard>
  )
}

export default ProductCard
