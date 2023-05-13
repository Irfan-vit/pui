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
    max-width: 24%;
  }
  > button {
    margin: 0 auto;
    display: inline;
  }
`
const StyledImageWrapper = styled.div`
  height: 15rem;
  width: 15rem;
  > img {
    max-width: 100%;
    min-height: 100%;
  }
`

const StyledIconsWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 0.8rem;
  > a {
    margin-right: 1rem;
  }
`

const ProductCard = (props) => {
  return (
<div ="container">
    <figure ="content badge">
        <img src="https:add/image" alt="Image" />
        <figcaption ="title">
            <h2>Nike Air Max</h2>
            <p>Soft and Smooth.</p>
        </figcaption>
        <i ="far fa-heart"></i>
        <h4>NEW</h4>
    </figure>
    <div ="about">
        <h5 ="product-description">
            Sustainable Materials
        </h5>
        <p></p>
        <p>Unisex</p>
        <p>available in colors</p>
        <div ="colors">
            <div ="blue-unit"></div>
            <div ="green-unit"></div>
            <div ="red-unit"></div>
        </div>
        <h5 ="product-price">
            ₹ 8,995
        </h5>
    </div>
    <div ="icons">
        <button ="btn full-width" id="default-btn">
            Add To Cart
        </button>
    </div>
</div>
  )
}

export default ProductCard
