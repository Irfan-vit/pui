import styled from 'styled-components'

import { Button } from '../buttons/Primary'

import { FaShoppingCart, FaHeart } from 'react-icons/fa'

const StyledProductCard = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  > img {
    width: 100%;
    height: 10rem;
  }
`
const StyledProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: var(--space-sm);
  box-shadow: RGBA(0, 0, 0, 0.24) 0px 3px 8px;
  max-width: 0;
  min-width: 2%;
  margin-top: 0.5rem;
`

const StyledAboutWrapper = styled.div``

const ProductCard = (props) => {
  return (
    <StyledProductCardWrapper className="container">
      <StyledProductCard className="content badge">
        <img src={props.imgSrc} alt="Image" />
        <figcaption className="title">
          <h2>{props.title}</h2>
          <p>Soft and Smooth.</p>
        </figcaption>
        <i className="far fa-heart"></i>
        <h4>NEW</h4>
      </StyledProductCard>
      <StyledAboutWrapper className="about">
        <h5 className="product-description">Sustainable Materials</h5>
        <p>Unisex</p>
        <p>available in colors</p>
        <h5 className="product-price">₹ 8,995</h5>
      </StyledAboutWrapper>
      <div className="icons">
        <Button className="btn full-width" id="default-btn">
          Add To Cart
        </Button>
      </div>
    </StyledProductCardWrapper>
  )
}

export default ProductCard
