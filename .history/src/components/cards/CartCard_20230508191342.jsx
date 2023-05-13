import styled from 'styled-components'

const CartCardWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  @media (min-width: 550px) {
    > div {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
  }
`

const StyledCartImage = styled.div`
  flex-basis: 20%;
  > div {
    background-image: url('https://plus.unsplash.com/premium_photo-1674939148262-54e2707ec176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
    min-height: 150px;
  }
`

const CartCard = () => {
  return (
    <CartCardWrapper>
      <StyledCartImage>
        <div className="one"></div>
      </StyledCartImage>
      <div>
        <h4>Title</h4>
        <div>
          <a href="">+</a>
          <p>price</p>
          <a href="">-</a>
        </div>
      </div>
    </CartCardWrapper>
  )
}

export default CartCard
