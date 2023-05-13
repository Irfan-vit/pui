import styled from 'styled-components'
import CartCard from '../components/cards/CartCard'

const StyledCartCardsWrapper = styled.div``

const CartCards = () => {
  return (
    <StyledCartCardsWrapper>
      <CartCard />
      <CartCard />
      <CartCard />
      <CartCard />
    </StyledCartCardsWrapper>
  )
}

export default CartCards
