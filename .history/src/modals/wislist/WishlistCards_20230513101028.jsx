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

  return (
    <StyledProductCardsWrapper className="articlewrap">
      cartState.cart.length <= 0 ?
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
