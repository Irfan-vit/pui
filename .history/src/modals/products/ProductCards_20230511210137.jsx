import useFilteredProducts from '../../hooks/useFilteredProducts'

import ProductCard from '../../components/cards/ProductCard'
import { StyledProductCardsWrapper } from './ProductCardsStyles'

const ProductCards = () => {
  const [results] = useFilteredProducts()
  console.log(results, 'this is results')
  return (
    <StyledProductCardsWrapper className="articlewrap">
      {results.map(
        ({
          _id,
          isFeatured,
          title,
          price,
          categoryName,
          inWishlist,
          imgSrc,
          rating,
        }) => (
          <ProductCard
            key={_id}
            id={_id}
            price={price}
            name={title}
            imgSrc={imgSrc}
            _id={_id}
            rating={rating}
            inCart
            inWishlist
          />
        ),
      )}
    </StyledProductCardsWrapper>
  )
}

export default ProductCards
