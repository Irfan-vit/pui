import styled from 'styled-components'

import ProductCard from '../components/cards/ProductCard'

import useFilteredProducts from '../hooks/useFilteredProducts'

const StyledProductCardsWrapper = styled.div`
  @media (min-width: 650px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(10px, 1fr));
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(, minmax(10px, 1fr));
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
