import styled from 'styled-components'
import CartCard from '../components/cards/CartCard'
import { Button } from '../components/buttons/Primary'

const StyledCartCardsWrapper = styled.div``

const StyledOrderContetntWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  @media (min-width: 550px) {
    display: flex;
    
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
