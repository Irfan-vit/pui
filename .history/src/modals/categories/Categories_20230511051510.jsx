import { useQuery } from '@tanstack/react-query'
import getCategories from '../../queries/getCategories'
import CategoreyCard from '../../components/cards/CategoreyCard'

import CategoryTitle from '../../components/headings/CategoryTitle'
import {}

const StyledCategoriesWrapper = styled.div`
  @media (min-width: 550px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2% 1%;
    margin: 2% 0;
  }
`

const Categories = () => {
  const categories = useQuery(['categories'], getCategories)

  if (categories.isLoading) {
    return <h1>Loading</h1>
  }
  if (categories.isSuccess)
    return (
      <>
        <CategoryTitle heading="Categories" />
        <StyledCategoriesWrapper>
          {categories.data.map((e) => (
            <CategoreyCard {...e} key={e._id} />
          ))}
        </StyledCategoriesWrapper>
      </>
    )
}

export default Categories
