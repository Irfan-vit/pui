import useFilteredProducts from '../../hooks/useFilteredProducts'

import ProductCard from '../../components/cards/ProductCard'
import { StyledProductCardsWrapper } from './ProductCardsStyles'

const ProductCards = () => {
  const [results] = useFilteredProducts()
  console.log(results, 'this is results')
  return (
    <StyledProductCardsWrapper className="articlewrap">
      {results.map(({ id, price, title, imgSrc, rating, _id }) => (
        <ProductCard
          key={id}
          id={id}
          price={price}
          name={title}
          imgSrc={imgSrc}
          _id={_id}
          rating={rating}
          inCart
          inWishlist
        />
      ))}
    </StyledProductCardsWrapper>
  )
}

export default ProductCards
