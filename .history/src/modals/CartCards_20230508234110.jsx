import styled from 'styled-components'
import CartCard from '../components/cards/CartCard'
import { Button } from '../components/buttons/Primary'

const StyledCartCardsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`

const StyledOrderContetntWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  @media (min-width: 550px) {
    position: absolute;
    bottom: 0;
    right: 8%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    > div {
      display: flex;
      width: 100%;
      flex-flow: column wrap;
      justify-content: flex-end;
      align-items: center;
      align-content: center;
      h3 
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
      <CartCard />
      <CartCard />
      <StyledOrderContetntWrapper>
        <div>
          <h3>Total : 9999</h3>
          <Button>Check Out</Button>
        </div>
      </StyledOrderContetntWrapper>
    </StyledCartCardsWrapper>
  )
}

export default CartCards
