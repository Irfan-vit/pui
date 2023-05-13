import useFilteredProducts from '../../hooks/useFilteredProducts'

import ProductCard from '../../components/cards/ProductCard'
import { StyledProductCardsWrapper } from './ProductCardsStyles'

const ProductCards = () => {
  const [results] = useFilteredProducts()
  console.log(results, 'this is results')
  return (
    <StyledProductCardsWrapper className="articlewrap">
      {results.map((e) => (
        <ProductCard props={e} key={e._id} />
      ))}
    </StyledProductCardsWrapper>
  )
}

export default ProductCards
