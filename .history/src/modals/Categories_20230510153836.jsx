import CategoreyCard from '../components/cards/CategoreyCard'
import styled from 'styled-components'

const StyledCategoriesWrapper = styled.div`
display:L
`

const Categories = () => {
  return (
    <StyledCategoriesWrapper>
      <CategoreyCard />
      <CategoreyCard />
      <CategoreyCard />
      <CategoreyCard />
    </StyledCategoriesWrapper>
  )
}

export default Categories
