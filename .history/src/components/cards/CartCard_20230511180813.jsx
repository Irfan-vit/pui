import { StyledCartImage, StyledCartCardWrapper } from './styles/CartStyles'

const CartCard = (props) => {
  return (
    <StyledCartCardWrapper>
      <StyledCartImage>
        <div className="one"></div>
      </StyledCartImage>
      <div>
        <h4>
          {props.title}
          <span>Qty:(1)</span>
        </h4>
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