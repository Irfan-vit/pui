import useFilteredProducts from '../../hooks/useFilteredProducts'

import WishlistCard from '../../components/cards/WishlistCard'
import { StyledProductCardsWrapper } from '../products/ProductCardsStyles'

import { useCart } from '../../context/cartcontext'
import { useWishlist } from '../../context/wishlistContext'

const WishlistCards = () => {
  const [results] = useFilteredProducts()
  console.log(results, 'this is results')
  const { cartState } = useCart()
  const { wishlistState } = useWishlist()
  {wishlistState.cart.length <= 0 ? (
    <div>
    <Empty />
  </div>
          ) : (
  return (
    <StyledProductCardsWrapper className="articlewrap">
      {wishlistState.wishlist.map(
        ({ _id, title, price, categoryName, imgSrc, rating }) => (
          <WishlistCard
            key={_id}
            _id={_id}
            price={price}
            title={title}
            imgSrc={imgSrc}
            rating={rating}
            categoryName={categoryName}
          />
        ),
      )}
    </StyledProductCardsWrapper>
  )
}

export default WishlistCards
