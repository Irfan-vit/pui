import { StyledCartImage, StyledCartCardWrapper } from './styles/CartStyles'
import { useCart } from '../../context/cartContext'

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
  const [details] = cartState.cart.filter((item) => item._id === _id)
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
            <span> Qty({details.count})</span>
            <a
              href="#"
              onClick={() => {
                if (details.count > 1) {
                  decreaseQty({
                    _id,
                    title,
                    price,
                    categoryName,
                    imgSrc,
                    rating,
                    inCart,
                  })
                } else {
                  removeFromCart({
                    _id,
                    title,
                    price,
                    categoryName,
                    imgSrc,
                    rating,
                    inCart,
                  })
                }
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
