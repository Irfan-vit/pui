import { Button } from '../../components/buttons/Primary'
import CartCard from '../../components/cards/CartCard'

import { useCart } from '../../context/cartcontext'

import {
  StyledCartCardsWrapper,
  StyledOrderContetntWrapper,
} from './CartCardStyles'

const CartCards = () => {
  const { cartState, cartDispatch, addToCart } = useCart()
  console.log(cartState)
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
        {cartState.cart.map(({ _id, categoryName, imgSrc }) => (
          <CartCard
            _id={_id}
            categoryName={categoryName}
            imgSrc={imgSrc}
            key={_id}
          />
        ))}
        {/* <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard /> */}
      </StyledCartCardsWrapper>
    </>
  )
}

export default CartCards
