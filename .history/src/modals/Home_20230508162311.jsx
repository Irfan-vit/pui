import styled from 'styled-components'

import NavBar from '../components/NavBar/NavBar'
import Mission from '../components/mission/Mission'
import FeaturedCards from './FeaturedCards'
import Footer from '../components/Footer/Footer'

const StyledHomeWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`

const Home = () => {
  return (
    <>
      <NavBar />
      <StyledHomeWrapper>
        <Mission />
        <FeaturedCards />
        <FeaturedCards />
      </StyledHomeWrapper>
      <Footer />
    </>
  )
}

export default Home
