import CategoreyCard from '../components/cards/CategoreyCard'
import styled from 'styled-components'

const StyledCategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
