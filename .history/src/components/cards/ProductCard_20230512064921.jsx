import { Button } from '../buttons/Primary'
import { Rating } from 'react-simple-star-rating'
import { StyledProductCard, StyledIcons } from './styles/ProductStyles'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'
import { MdShoppingCartCheckout } from 'react-icons/md'
import { FaHeartBroken } from 'react-icons/fa'

import { useCart } from '../../context/cartcontext'
import { useState } from 'react'

const ProductCard = ({
  _id,
  title,
  price,
  categoryName,
  imgSrc,
  rating,
  inCart,
  inWishlist,
}) => {
  const [disabled, setDisabled] = useState(true)
  const { addToCart, removeFromCart } = useCart()
  console.log(_id)
  return (
    <StyledProductCard>
      <h3>{title}</h3>
      <p>{categoryName}</p>
      <img src={imgSrc} alt="image" />
      <div className="about">
        <p className="product-price">₹ {price}</p>
        <Rating initialValue={rating} transition size={20} />
        <a href="https://add/link" target="_blank" rel="noreferrer">
          <Button varient="outline" className="btn btn-otl-default">
            View Details
          </Button>
        </a>
        <StyledIcons>
          {!d ? (
            <a href="#">
              <MdShoppingCartCheckout />
            </a>
          ) : (
            <a
              href="#"
              onClick={() => {
                setDisabled(false)
                addToCart(
                  { _id, title, price, categoryName, imgSrc, rating, inCart },
                  setDisabled,
                )
              }}
            >
              <AiOutlineShoppingCart />
            </a>
          )}

          {inWishlist ? (
            <a href="#">
              <FaHeartBroken />
            </a>
          ) : (
            <a
              href="#"
              onClick={() =>
                addToCart(
                  { _id, title, price, categoryName, imgSrc, rating },
                  _id,
                )
              }
            >
              <AiOutlineHeart />
            </a>
          )}
        </StyledIcons>
      </div>
    </StyledProductCard>
  )
}

export default ProductCard
