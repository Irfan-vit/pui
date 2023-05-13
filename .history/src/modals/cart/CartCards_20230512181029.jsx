import { Button } from '../../components/buttons/Primary'
import CartCard from '../../components/cards/CartCard'

import { useCart } from '../../context/cartcontext'

import {
  StyledCartCardsWrapper,
  StyledOrderContetntWrapper,
} from './CartCardStyles'

const CartCards = () => {
  const {
    cartState,
    removeFromCart,
    increaseQty,
    decreaseQty,
    getTotal,
  } = useCart()
  const { cartState, cartDispatch, addToCart, getTotal } = useCart()
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
        {cartState.cart.length <= 0 ? (
          <h1>none </h1>
        ) : (
          cartState.cart.map(
            ({ _id, title, price, categoryName, imgSrc, rating }) => (
              <CartCard
                key={_id}
                _id={_id}
                price={price}
                title={title}
                imgSrc={imgSrc}
                rating={rating}
                categoryName={categoryName}
              />
            ),
          )
        )}
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
