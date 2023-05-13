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
  const { removeFromCart, cartState, increaseQty, useManage } = useCart()
  const [disabled, setDisabled] = useManage()
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
          <a
            href="#"
            onClick={() => {
              setDisabled(false)
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
          <span>{price}</span>
          <a href="">-</a>
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
