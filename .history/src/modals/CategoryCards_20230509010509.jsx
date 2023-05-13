import { useQuery } from '@tanstack/react-query'

import fetchCategories from '../backend/db/fetchCategories'

import ImageCard from '../components/cards/ImageCard'
import CategoryTitle from '../components/headings/CategoryTitle'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  /* background-color: ${(props) => props.theme.offSetBg}; */
  margin: 0 auto;
  padding: 1rem;
  margin: 1rem 0;
`

const Cards = styled.div`
  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1%;
  }
`

async function fetchCategories() {
  const {
    data: { categories },
  } = await fetchCategories('https://sprint/sprint-api/v1/categories')
}

const CategoryCards = () => {
  const categories = useQuery(['categories', fetchCategories])
  return (
    <>
      <CategoryTitle heading="Categories" />
      <Wrapper>
        <Cards>
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </Cards>
      </Wrapper>
    </>
  )
}

export default CategoryCards
