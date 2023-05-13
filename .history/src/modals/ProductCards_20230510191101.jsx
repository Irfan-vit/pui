import styled from 'styled-components'

import ProductCard from '../components/cards/ProductCard'

import useFilteredProducts from '../hooks/useFilteredProducts'

const StyledProductCardsWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 1rem;
  @media (min-width: 550px) {

  }
  @media (min-width: 1000px) {

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
