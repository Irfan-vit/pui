import NavBar from '../components/NavBar/NavBar'
import Mission from '../components/mission/Mission'
import FeaturedCards from './FeaturedCards'
import Footer from '../components/Footer/Footer'

const StyledHomeWrapper = div`
    width: 1200px
`

const Home = () => {
  return (
    <div>
      <NavBar />
      <Mission />
      <FeaturedCards />
      <FeaturedCards />
      <Footer />
    </div>
  )
}

export default Home
