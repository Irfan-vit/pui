import CategoreyCard from '../components/cards/CategoreyCard'
import styled from 'styled-components'

const StyledCategoriesWrapper = styled.div``

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
