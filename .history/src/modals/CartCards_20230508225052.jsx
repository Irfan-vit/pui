import styled from 'styled-components'
import CartCard from '../components/cards/CartCard'

const StyledCartCardsWrapper = styled.div`
  @media (min-width: 550px) {
  }
`

const StyledOrderContetntWrapper = styled.div``

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
            <h2></h2>
        </div>
      </StyledOrderContetntWrapper>
    </StyledCartCardsWrapper>
  )
}

export default CartCards
