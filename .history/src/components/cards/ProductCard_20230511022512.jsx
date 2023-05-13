import styled from 'styled-components'

import { Button } from '../buttons/Primary'

import { Rating } from 'react-simple-star-rating'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'
import { StyledProductCard, StyledIcons } from './styles/ProductStyles'

const ProductCard = (props) => {
  return (
    <StyledProductCard>
      <h3>{props.title}</h3>
      <p>{props.categoryName}</p>
      <img src={props.imgSrc} alt="image" />
      <div className="about">
        <p className="product-price">₹ {props.price}</p>
        <Rating initialValue={props.rating} transition size={20} />
        <a href="https://add/link" target="_blank" rel="noreferrer">
          <Button varient="outline" className="btn btn-otl-default">
            View Details
          </Button>
        </a>
        <StyledIcons>
          <a href="">
            <AiOutlineHeart />
          </a>
          <a href="">
            <AiOutlineShoppingCart />
          </a>
        </StyledIcons>
      </div>
    </StyledProductCard>
  )
}

export default ProductCard
