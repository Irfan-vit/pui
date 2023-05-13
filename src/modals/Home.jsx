import styled from 'styled-components'

import NavBar from '../components/navBar/NavBar'
import Mission from '../components/mission/Mission'
import FeaturedCards from './featured/FeaturedCards'
import Footer from '../components/footer/Footer'
import Hero from '../components/hero/HeroImg'
import Categories from './categories/Categories'
import { useFilterProducts } from '../context/filterProductsContext'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import getCategories from '../queries/getCategories'
import { useProducts } from '../context/getProductsContext'
import HomeLoader from '../components/animations/Loaders/HomeLoader'
const StyledHomeWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 16vh;
`

const Home = () => {
  const { filterDispatch } = useFilterProducts()
  useEffect(() => {
    filterDispatch({ type: 'reset' })
  }, [])
  const categories = useQuery(['categories'], getCategories)
  const { productsQuery } = useProducts()
  if (categories.isLoading || productsQuery.isLoading)
    return (
      <div>
        <HomeLoader />
      </div>
    )
  if (categories.isSuccess && productsQuery.isSuccess)
    return (
      <>
        <NavBar />
        <StyledHomeWrapper>
          <Mission />
          <Hero />
          <FeaturedCards />
          <Categories />
        </StyledHomeWrapper>
        <Footer />
      </>
    )
}

export default Home
