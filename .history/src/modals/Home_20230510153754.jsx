import styled from 'styled-components'

import NavBar from '../components/NavBar/NavBar'
import Mission from '../components/mission/Mission'
import FeaturedCards from './FeaturedCards'
import CategoryCards from './CategoryCards'
import Footer from '../components/Footer/Footer'
import Hero from '../components/hero/HeroImg'

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
        <FeaturedCards />
        <CategoryCards />
        <Cate
      </StyledHomeWrapper>
      <Footer />
    </>
  )
}

export default Home
