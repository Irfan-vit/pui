import ProductCard from '../../components/cards/ProductCard'

import useFilteredProducts from '../../hooks/useFilteredProducts'
import {P}

const StyledProductCardsWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  @media (min-width: 630px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(10px, 1fr));
    gap: 0 1rem;
  }
  @media (min-width: 1300px) {
    grid-template-columns: repeat(4, minmax(10px, 1fr));
  }
`

const ProductCards = () => {
  const [results] = useFilteredProducts()
  console.log(results, 'this is results')
  return (
    <StyledProductCardsWrapper className="articlewrap">
      {results.map((e) => (
        <ProductCard {...e} key={e._id} />
      ))}
    </StyledProductCardsWrapper>
  )
}

export default ProductCards
