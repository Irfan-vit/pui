import styled from 'styled-components'

import NavBar from '../components/navBar/NavBar'
import Mission from '../components/mission/Mission'
import FeaturedCards from './featured/FeaturedCards'
import Footer from '../components/footer/Footer'
import Hero from '../components/hero/HeroImg'
import Categories from './categories/Categories'
import WishlistCards from './wislist/WishlistCards'
const StyledHomeWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 16vh;
`

const Home = () => {
  return (
    <>
      <NavBar />
      <StyledHomeWrapper>
        <Mission />
        <Hero />
        <WishlistCards />
        <Categories />
      </StyledHomeWrapper>
      <Footer />
    </>
  )
}

export default Home
