import styled from 'styled-components'
import CartCard from '../components/cards/CartCard'
import { Button } from '../components/buttons/Primary'

const StyledCartCardsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin
`

const StyledOrderContetntWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    > div {
      position: fixed;
      width: 100%;
      top: 9rem;
      min-height: 100px;
      display: flex;
      width: 100%;
      flex-flow: column wrap;
      justify-content: flex-end;
      align-items: center;
      align-content: center;
      > h3,
      h2 {
        color: ${(props) => props.theme.offSetText};
        text-decoration-line: underline;
        text-decoration-color: ${(props) => props.theme.offSetText};
        text-decoration-style: solid;
        text-decoration-thickness: 3px;
      }
    }
  }
`

const CartCards = () => {
  return (
    <>
      <StyledOrderContetntWrapper>
        <div>
          <h2>Order Summary</h2>
          <h3>Total : 9999</h3>
          <Button>Check Out</Button>
        </div>
      </StyledOrderContetntWrapper>
      <StyledCartCardsWrapper>
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </StyledCartCardsWrapper>
    </>
  )
}

export default CartCards
