import styled from 'styled-components'

import ProductCard from '../components/cards/ProductCard'

const StyledProductCardsWrapper = styled.div`
    
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
