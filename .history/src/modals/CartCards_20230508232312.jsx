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
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    > div {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      align-items: center;
      align-content: center;
      min-height: 150px;
      > div {
        /* border: 3px solid black; */
        flex-basis: 48%;
        text-align: center;
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
          <h4>Order Summary</h4>
          <p>Sub-Total: 9999</p>
          <p>Plus Delivery</p>
          <Button varient="outline">Contibnue Shopping</Button>
          <div>
            <h4>payment Details </h4>
            <h3>Total : 9999</h3>
            <Button>Contibnue Shopping</Button>
          </div>
        </div>
      </StyledOrderContetntWrapper>
    </StyledCartCardsWrapper>
  )
}

export default CartCards
