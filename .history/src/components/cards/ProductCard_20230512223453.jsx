import { Button } from '../buttons/Primary'
import { Rating } from 'react-simple-star-rating'
import { StyledProductCard, StyledIcons } from './styles/ProductStyles'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'
import { MdShoppingCartCheckout } from 'react-icons/md'
import { FaHeartBroken } from 'react-icons/fa'

import { useCart } from '../../context/cartcontext'
import { useWishlist } from '../../context/wishlistContext'
import { useToast } from '../../context/toastContext'

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
  const { addToCart, setTrue, cartState } = useCart()
  const { addToWishlist, wishlistState, removeFromWishlist } = useWishlist()
  const { toastDispatch } = useToast()

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
          {cartState.cart.find((item) => item._id === _id) ? (
            <a href="#">
              <MdShoppingCartCheckout />
            </a>
          ) : (
            <a
              href="#"
              onClick={() => {
                addToCart({
                  _id,
                  title,
                  price,
                  categoryName,
                  imgSrc,
                  rating,
                  inCart,
                }),      toastDispatch({
                  type: 'ADD_TOAST',
                  payload: {
                    _id: uuid(),
                    message: `Welcome back, ${response.data.foundUser.firstName}  `,
                    autoDelete: 3000,
                  },
              }}
            >
              <AiOutlineShoppingCart />
            </a>
          )}

          {wishlistState.wishlist.find((item) => item._id === _id) ? (
            <a
              href="#"
              onClick={() =>
                removeFromWishlist(
                  { _id, title, price, categoryName, imgSrc, rating },
                  _id,
                )
              }
            >
              <FaHeartBroken />
            </a>
          ) : (
            <a
              href="#"
              onClick={() =>
                addToWishlist(
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
