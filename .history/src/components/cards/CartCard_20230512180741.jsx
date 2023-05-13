import { StyledCartImage, StyledCartCardWrapper } from './styles/CartStyles'
import { useCart } from '../../context/cartcontext'

const CartCard = ({
  _id,
  title,
  price,
  categoryName,
  imgSrc,
  rating,
  inCart,
}) => {
  const {
    cartState,
    removeFromCart,
    increaseQty,
    decreaseQty,
    getTotal,
  } = useCart()
  console.log(cartState.cart.length, 'cartState.cart.length')
  const details = cartState.cart.filter((item) => item._id === _id)
  console.log(details[0], 'deatils')
  if (cartState.cart.length <= 0)
    return (
      <div>
        <h1>no items</h1>
      </div>
    )
  if (cartState.cart.length >= 1)
    return (
      <StyledCartCardWrapper>
        <StyledCartImage>
          <div>
            <img src={imgSrc} alt="" />
          </div>
        </StyledCartImage>
        <div>
          <h4>{title}</h4>
          <span>{price}</span>
          <div>
            <a
              href="#"
              onClick={() => {
                increaseQty({
                  _id,
                  title,
                  price,
                  categoryName,
                  imgSrc,
                  rating,
                  inCart,
                })
              }}
            >
              +
            </a>
            <span> Qty({details[0].count})</span>
            <a
              href="#"
              onClick={() => {
                if (details[0].count)
                decreaseQty({
                  _id,
                  title,
                  price,
                  categoryName,
                  imgSrc,
                  rating,
                  inCart,
                })
              }}
            >
              -
            </a>
          </div>
          <a
            href="#"
            onClick={() => {
              removeFromCart({
                _id,
                title,
                price,
                categoryName,
                imgSrc,
                rating,
                inCart,
              })
            }}
          >
            remove
          </a>
        </div>
      </StyledCartCardWrapper>
    )
}

export default CartCard
