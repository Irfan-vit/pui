import { StyledCartImage, StyledCartCardWrapper } from './styles/CartStyles'
import { useCart } from '../../context/cartcontext'
import { useState } from 'react'

const CartCard = ({
  _id,
  title,
  price,
  categoryName,
  imgSrc,
  rating,
  inCart,
}) => {
  const [disabled, setDisabled] = useState(true)
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
          onClick={() => {
            setDisabled(true)
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