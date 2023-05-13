import styled from 'styled-components'
import CartCard from '../components/cards/CartCard'
import { Button } from '../components/buttons/Primary'

const StyledCartCardsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 8rem;
`

const StyledOrderContetntWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  > div {
    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px,
      rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
    position: fixed;
    background-color: ${(props) => props.theme.primaryBg};
    width: 100%;
    top: 8rem;
    padding: 1rem;
    min-height: 100px;
    display: flex;
    width: 100%;
    flex-flow: column wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    > h2,
    h3 {
      color: ${(props) => props.theme.offSetText};
      text-decoration-line: underline;
      text-decoration-color: ${(props) => props.theme.offSetText};
      text-decoration-style: solid;
      text-decoration-thickness: 3px;
      text-underline-offset: 5px;
    }
  }
`

const CartCards = () => {
  return (
    <>
      <StyledOrderContetntWrapper>
        <div>
            <div>
                
            </div>
          <h2>Order Summary</h2>
          <h3>Total items (3): 9999</h3>
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
