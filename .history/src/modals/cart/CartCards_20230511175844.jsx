import { Button } from '../../components/buttons/Primary'
import CartCard from '../../components/cards/CartCard'

import { useCart } from '../../context/cartcontext'

import {
  StyledCartCardsWrapper,
  StyledOrderContetntWrapper,
} from './CartCardStyles'

const CartCards = () => {
  const { cartState, cartDispatch, addToCart } = useCart()
  return (
    <>
      <StyledOrderContetntWrapper>
        <div>
          <div>
            <h2>Order Summary</h2>
            <p>delivery Charges</p>
            <p>Tax: </p>
            <h3>Sub Total: 9999</h3>
          </div>

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
