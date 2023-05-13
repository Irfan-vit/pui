import { useQuery } from '@tanstack/react-query'
import getCategories from '../queries/getCategories'
import CategoreyCard from '../components/cards/CategoreyCard'
import styled from 'styled-components'

const StyledCategoriesWrapper = styled.div`
  @media (min-width: 550px) {
    > * {
      max-width: 100%;
      max-height: 100%;
      background-color: red;
    }
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2%; */

    --s: 150px; /* controls the size */
    --g: 0.5px; /* controls the gap */

    display: grid;
    gap: var(--g);
    width: calc(
      3 * var(--s) + 2 * var(--g)
    ); /* 3 times the size plus 2 times the gap */
    aspect-ratio: 1;
    grid-template-columns: repeat(2, auto);
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
