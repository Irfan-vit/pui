import styled from 'styled-components'

import ProductCard from '../components/cards/ProductCard'

const StyledProductCardsWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 1rem;
  @media (min-width: 650px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(10px, 1fr));
  }
  @media (min-width: 1000px) {
    
  }
`

const ProductCards = () => {
  return (
    <StyledProductCardsWrapper className="articlewrap">
      <ProductCard />
      <ProductCard />
    </StyledProductCardsWrapper>
  )
}

export default ProductCards
