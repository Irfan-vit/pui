import styled from 'styled-components'
import CartCard from '../components/cards/CartCard'
import { Button } from '../components/buttons/Primary'

const StyledCartCardsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: fie;
`

const StyledOrderContetntWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  @media (min-width: 550px) {
    /* position: fixed;
    top: 75%;
    right: 38%;
    min-height: 100px; */
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
      > h3 {
        color: ${(props) => props.theme.offSetText};
        text-decoration-line: overline;
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
      <StyledCartCardsWrapper>
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </StyledCartCardsWrapper>
      <StyledOrderContetntWrapper>
        <div>
          <h3>Total : 9999</h3>
          <Button>Check Out</Button>
        </div>
      </StyledOrderContetntWrapper>
    </>
  )
}

export default CartCards
