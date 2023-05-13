import { StyledCartImage, StyledCartCardWrapper } from './styles/CartStyles'

const CartCard = () => {
  return (
    <StyledCartCardWrapper>
      <StyledCartImage>
        <div className="one"></div>
      </StyledCartImage>
      <div>
        <h4>Title</h4>
        <div>
          <a href="">+</a>
          <span>price</span>
          <a href="">-</a>
        </div>
        <a href="">remove</a>
      </div>
    </StyledCartCardWrapper>
  )
}

export default CartCard
