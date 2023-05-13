import styled from 'styled-components'
import CartCard from '../components/cards/CartCard'
import { Button } from '../components/buttons/Primary'

const StyledCartCardsWrapper = styled.div``

const StyledOrderContetntWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  @media (min-width: 550px) {
    max-width: 1200px;
    display: flex;
    flex-flow: column wrap;
    > :first-child {
      display: flex;
      width: 100%;
      justify-content: space-around;
      min-height: 150px;
      > div {
        border: 3px solid black;
        flex-basis: 48%;
        text-align: center;
      }
    }
    > :last-child {
      display: flex;
      width: 100%;
      justify-content: center;
    }
  }
`

const CartCards = () => {
  return (
    <StyledCartCardsWrapper>
      <CartCard />
      <CartCard />
      <CartCard />
      <CartCard />
      <StyledOrderContetntWrapper>
        <div>
          <div>
            <h4>Order Summary</h4>
            <p>Sub-Total: 9999</p>
            <p>Plus Delivery</p>
            <button varient="outline">Contibnue Shopping</button>
          </div>
          <div>payment Details</div>
        </div>
        <div>
          <h2>Total</h2>
          <Button>Check Out</Button>
        </div>
      </StyledOrderContetntWrapper>
    </StyledCartCardsWrapper>
  )
}

export default CartCards
