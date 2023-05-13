import styled from 'styled-components'

import NavBar from '../components/navBar/NavBar'
import Mission from '../components/mission/Mission'
import FeaturedCards from './featured/FeaturedCards'
import Footer from '../components/footer/Footer'
import Hero from '../components/hero/HeroImg'
import Categories from './categories/Categories'
import WishlistCards from './wislist/WishlistCards'
import { useFilterProducts } from '../context/filterProductsContext'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import getCategories from '../queries/getCategories'
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
  return (
    <>
      <NavBar />
      <StyledHomeWrapper>
        <Mission />
        <Hero />
        <WishlistCards />
        <FeaturedCards />
        <Categories />
      </StyledHomeWrapper>
      <Footer />
    </>
  )
}

export default Home
