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

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavBar />
      <HeroImg />
      <Footer />
      {/* <Products /> */}
      <MoveUp />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
