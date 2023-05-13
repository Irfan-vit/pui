import useFilteredProducts from '../../hooks/useFilteredProducts'

import WishlistCard from '../../components/cards/WishlistCard'
import { StyledProductCardsWrapper } from '../products/ProductCardsStyles'

import { useCart } from '../../context/cartcontext'
import { useWishlist } from '../../context/wishlistContext'
import Empty from '../../components/animations/Loaders/Empty'
import NavBar from '../../components/navBar/NavBar'
import styled from 'styled-components'

const StyledWishlistWrapper = styled.div`
  max-width: 1280px;
`

const StyledEmptyWrapper = styled.div`
margin: auto;
`

const WishlistCards = () => {
  const [results] = useFilteredProducts()
  console.log(results, 'this is results')
  const { cartState } = useCart()
  const { wishlistState } = useWishlist()

  return (
    <>
      <NavBar />
      <StyledWishlistWrapper>
        <StyledProductCardsWrapper className="articlewrap">
          {wishlistState.wishlist.length <= 0 ? (
            <StyledEmptyWrapper>
              <Empty />
            </StyledEmptyWrapper>
          ) : (
            wishlistState.wishlist.map(
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
            )
          )}
        </StyledProductCardsWrapper>
      </StyledWishlistWrapper>
    </>
  )
}

export default WishlistCards
