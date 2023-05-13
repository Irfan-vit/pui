import styled from 'styled-components'
{ StyledCartImage, StyledCartCardWrapper } 

const CartCardWrapper = styled.div`
  padding: 1rem;
  margin: 0 auto;
  text-align: center;
  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    > :first-child {
      flex-basis: 30%;
    }
    > :last-child {
      flex-basis: 70%;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
    }
  }
`

const StyledCartImage = styled.div`
  flex-basis: 30%;
  > div {
    background-image: url('https://plus.unsplash.com/premium_photo-1674939148262-54e2707ec176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
    min-height: 150px;
  }
`

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
