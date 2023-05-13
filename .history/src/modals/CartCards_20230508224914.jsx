import styled from 'styled-components'
import CartCard from '../components/cards/CartCard'

const StyledCartCardsWrapper = styled.div`
  @media (min-width: 550px) {
  }
`

const StyledOrderContetntWrapper = styled.div`
    
`

const CartCards = () => {
  return (
    <StyledCartCardsWrapper>
      <CartCard />
      <CartCard />
      <CartCard />
      <CartCard />
      <div>

      </div>
    </StyledCartCardsWrapper>
  )
}

export default CartCards
