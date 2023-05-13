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
import { useProducts } from '../context/getProductsContext'
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
  if (categories.isLoading || productsQuery.isLoading) return import { useLottie } from "lottie-react";
  import groovyWalkAnimation from "./groovyWalk.json";
  
  const style = {
    height: 300,
  };
  
  const Example = () => {
    const options = {
      animationData: groovyWalkAnimation,
      loop: true,
      autoplay: true,
    };
  
    const { View } = useLottie(options, style);
  
    return View;
  };
  
  export default Example;
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
