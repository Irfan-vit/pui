import styled from 'styled-components'
import CartCard from '../components/cards/CartCard'
import { Button } from '../components/buttons/Primary'

const StyledCartCardsWrapper = styled.div``

const StyledOrderContetntWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  @media (min-width: 550px) {
    display: flex;
    flex-flow: column wrap;
    > :first-child {
      display: flex;
      width: 100%;
      justify-content: space-between;
      min-height: 150px;
      > div {
        border: 3px solid black;
        flex-basis: ;
      }
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
          <div>delivery Address</div>
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
