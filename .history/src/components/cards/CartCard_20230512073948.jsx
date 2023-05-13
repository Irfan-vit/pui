import { StyledCartImage, StyledCartCardWrapper } from './styles/CartStyles'
import { useCart } from '../../context/cartcontext'

const CartCard = ({ _id, title, price, categoryName, imgSrc, rating, inCar }) => {
  const { removeFromCart } = useCart()
  return (
    <StyledCartCardWrapper>
      <StyledCartImage>
        <div>
          <img src={imgSrc} alt="" />
        </div>
      </StyledCartImage>
      <div>
        <h4>{title}</h4>
        <span>Qty(1)</span>
        <div>
          <a href="">+</a>
          <span>{price}</span>
          <a href="">-</a>
        </div>
        <a
          href="#"
          onClick={() =>
            removeFromCart(
              { _id, title, price, categoryName, imgSrc, rating, inCart },
              setDisabled,
            )
          }
        >
          remove
        </a>
      </div>
    </StyledCartCardWrapper>
  )
}

export default CartCard
