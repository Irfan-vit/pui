import { useQuery } from '@tanstack/react-query'
import CategoreyCard from '../components/cards/CategoreyCard'
import styled from 'styled-components'

const StyledCategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2%;
`

const Categories = () => {
  const categories = useQuery(['categories'], getCategories)

  if (categories.isLoading) {
    return <h1>Loading</h1>
  }
  if (categories.isSuccess)
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
