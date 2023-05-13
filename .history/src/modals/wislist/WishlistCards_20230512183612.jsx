import useFilteredProducts from '../../hooks/useFilteredProducts'

import WishlistCard from '../../components/cards/WishlistCard'
import { StyledProductCardsWrapper } from './ProductCardsStyles'

const ProductCards = () => {
  const [results] = useFilteredProducts()
  console.log(results, 'this is results')
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
