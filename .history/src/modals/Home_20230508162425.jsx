import styled from 'styled-components'

import NavBar from '../components/NavBar/NavBar'
import Mission from '../components/mission/Mission'
import FeaturedCards from './FeaturedCards'
import Footer from '../components/Footer/Footer'
import Hero from '../components/hero/HeroImg'

const StyledHomeWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  margin-top: 16vh;
`

const Home = () => {
  return (
    <>
      <NavBar />
      <StyledHomeWrapper>
        <Hero />
        <Mission />

        <FeaturedCards />
        <FeaturedCards />
      </StyledHomeWrapper>
      <Footer />
    </>
  )
}

export default Home
