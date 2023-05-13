import styled from 'styled-components'

import NavBar from '../components/NavBar/NavBar'
import Mission from '../components/mission/Mission'
import FeaturedCards from './FeaturedCards'
import Footer from '../components/footer/Footer'
import Hero from '../components/hero/HeroImg'
import Categories from './Categories'

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
        {/* <CategoryCards /> */}
        <Categories />
      </StyledHomeWrapper>
      <Footer />
    </>
  )
}

export default Home
