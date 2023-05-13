import { useQuery } from '@tanstack/react-query'
import getCategories from '../queries/getCategories'
import CategoreyCard from '../components/cards/CategoreyCard'
import styled from 'styled-components'

const StyledCategoriesWrapper = styled.div`
  @media (min-width: 550px) {
    --s: 150px;
    --g: 10px;

    /* max-width: 1280px; */
    display: grid;
    width: calc(3 * var(--s) + 2 * var(--g));
    grid-template-columns: repeat(2, auto);
    gap: var(--g);
  }
`

const Categories = () => {
  const categories = useQuery(['categories'], getCategories)

  if (categories.isLoading) {
    return <h1>Loading</h1>
  }
  if (categories.isSuccess)
    return (
      <StyledCategoriesWrapper>
        {categories.data.map((e) => (
          <CategoreyCard {...e} key={e._id} />
        ))}
      </StyledCategoriesWrapper>
    )
}

export default Categories
