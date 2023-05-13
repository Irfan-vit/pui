import useFilteredProducts from '../../hooks/useFilteredProducts'

import WishlistCard from '../../components/cards/WishlistCard'
import { StyledProductCardsWrapper } from '../products/ProductCardsStyles'

const WishlistCards = () => {
  const [results] = useFilteredProducts()
  console.log(results, 'this is results')
  import { useCart } from '../../context/cartcontext'
  return (
    <StyledProductCardsWrapper className="articlewrap">
      {results.map(({ _id, title, price, categoryName, imgSrc, rating }) => (
        <WishlistCard
          key={_id}
          _id={_id}
          price={price}
          title={title}
          imgSrc={imgSrc}
          rating={rating}
          categoryName={categoryName}
        />
      ))}
    </StyledProductCardsWrapper>
  )
}

export default WishlistCards
