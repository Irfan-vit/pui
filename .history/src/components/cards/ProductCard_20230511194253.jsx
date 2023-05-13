import { Button } from '../buttons/Primary'
import { Rating } from 'react-simple-star-rating'
import { StyledProductCard, StyledIcons } from './styles/ProductStyles'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'

import { useCart } from '../../context/cartContext'

const ProductCard = (props) => {
  const { cartState, cartDispatch, addToCart } = useCart()
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
            <AiOutlineHeart onClick={} />
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
