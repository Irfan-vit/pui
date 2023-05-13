import Empty from '../../components/animations/Loaders/Empty'
import { Button } from '../../components/buttons/Primary'
import CartCard from '../../components/cards/CartCard'
import 

import {
  StyledCartCardsWrapper,
  StyledOrderContetntWrapper,
} from './CartCardStyles'

const CartCards = () => {
  const { cartState, getTotal } = useCart()
  return (
    <>
      <StyledOrderContetntWrapper>
        <div>
          <div>
            <h2>Order Summary</h2>
            <p>delivery Charges</p>
            <p>Tax: </p>
            <h3>Sub Total: {getTotal()}</h3>
          </div>

          <Button>Check Out</Button>
        </div>
      </StyledOrderContetntWrapper>
      <StyledCartCardsWrapper>
        {cartState.cart.length <= 0 ? (
          <div>
            <Empty />
          </div>
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
      </StyledCartCardsWrapper>
    </>
  )
}

export default CartCards
