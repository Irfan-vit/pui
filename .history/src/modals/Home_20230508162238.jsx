import styled from 'styled-components'

import NavBar from '../components/NavBar/NavBar'
import Mission from '../components/mission/Mission'
import FeaturedCards from './FeaturedCards'
import Footer from '../components/Footer/Footer'

const StyledHomeWrapper = styled.div`
  width: 1200px;
`

const Home = () => {
  return (
    <StyledHomeWrapper>
      <NavBar />
      <Mission />
      <FeaturedCards />
      <FeaturedCards />
      <Footer />
    </div>
  )
}

export default Home
