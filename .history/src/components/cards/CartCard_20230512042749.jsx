import { StyledCartImage, StyledCartCardWrapper } from './styles/CartStyles'

const CartCard = ({ _id, title, price, categoryName, imgSrc, rating }) => {
  return (
    <StyledCartCardWrapper>
      <StyledCartImage>
        <div>
          <img src={imgSrc} alt="" />
        </div>
      </StyledCartImage>
      <div>
        <h4>{.title}</h4>
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
