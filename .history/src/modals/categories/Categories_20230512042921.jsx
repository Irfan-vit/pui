import { useQuery } from '@tanstack/react-query'

import getCategories from '../../queries/getCategories'
import CategoreyCard from '../../components/cards/CategoreyCard'
import CategoryTitle from '../../components/headings/CategoryTitle'
import { StyledCategoriesWrapper } from './CategoriesStyles'

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
          {categories.data.map(({ _id, categoryName, imgSrc }) => (
            <CategoreyCard
              _id={_id}
              categoryName={categoryName}
              imgSrc={imgSrc}
              key={_id}
            />
          ))}
        </StyledCategoriesWrapper>
      </>
    )
}

export default Categories
