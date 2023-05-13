import { StyledCartImage, StyledCartCardWrapper } from './styles/CartStyles'

const CartCard = (props) => {
  return (
    <StyledCartCardWrapper>
      <StyledCartImage>
        <div>img</div>
      </StyledCartImage>
      <div>
        <h4>{props.title}</h4>
        <span>Qty(1)</span>
        <div>
          <a href="">+</a>
          <span>{props.price}</span>
          <a href="">-</a>
        </div>
        <a href="">remove</a>
      </div>
    </StyledCartCardWrapper>
  )
}

export default CartCard
