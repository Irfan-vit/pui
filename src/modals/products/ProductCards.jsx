import useFilteredProducts from '../../hooks/useFilteredProducts'

import ProductCard from '../../components/cards/ProductCard'
import { StyledProductCardsWrapper } from './ProductCardsStyles'

const ProductCards = () => {
  const [results] = useFilteredProducts()
  return (
    <StyledProductCardsWrapper className="articlewrap">
      {results.map(({ _id, title, price, categoryName, imgSrc, rating }) => (
        <ProductCard
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

export default ProductCards
