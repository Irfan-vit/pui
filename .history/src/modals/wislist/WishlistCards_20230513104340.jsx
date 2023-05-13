import useFilteredProducts from '../../hooks/useFilteredProducts'

import WishlistCard from '../../components/cards/WishlistCard'
import { StyledProductCardsWrapper } from '../products/ProductCardsStyles'

import { useCart } from '../../context/cartcontext'
import { useWishlist } from '../../context/wishlistContext'
import Empty from '../../components/animations/Loaders/Empty'
import NavBar from '../../components/navBar/NavBar'
import styled from 'styled-components'
import ProductCard from '../../components/cards/ProductCard'

const StyledWishlistWrapper = styled.div`
  max-width: 1000px;
  /* background-color: red; */
  margin: 0 auto;
`

const StyledEmptyWrapper = styled.div`
  margin: 0 auto;
  > * {
    position: absolute;
    right: 0%;
    margin: 0 auto;
    width: 100vw;
  }
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
                <ProductCard
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
