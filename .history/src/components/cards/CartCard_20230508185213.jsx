import styled from 'styled-components'

const CartCardWrapper = styled.div`
  display: flex;
  flex-fl
`

const StyledCartImage = styled.div`
  > div {
    background-image: linear-gradient(
        rgba(232, 205, 255, 0.507),
        rgba(193, 175, 241, 0.9)
      ),
      url('https://plus.unsplash.com/premium_photo-1674939148262-54e2707ec176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
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
      </div>
      <div></div>
    </CartCardWrapper>
  )
}

export default CartCard
