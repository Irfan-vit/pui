import './utils/colors.css'
import './utils/typography.css'

import GlobalStyles from './theme/Global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './theme/theme'

import MoveUp from './components/Floats/MoveUp'
import Products from './modals/Products'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Hero from './components/hero/HeroImg'
import Mission from './components/mission/Mission'
import FeaturedCards from './modals/FeaturedCards'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <NavBar />
      <Hero />
      <Mission />
      <FeaturedCards />
      <Footer /> */}
      {/* <Products /> */}
      <MoveUp />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
