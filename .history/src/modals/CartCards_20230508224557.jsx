import styled from 'styled-components'
import CartCard from '../components/cards/CartCard'

const StyledCartCardsWrapper = styled.div``

const CartCards = () => {
  return (
    <div>
      <CartCard />
      <CartCard />
      <CartCard />
      <CartCard />
    </div>
  )
}

export default CartCards