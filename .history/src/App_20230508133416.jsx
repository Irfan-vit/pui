import './utils/colors.css'
import './utils/typography.css'

import GlobalStyles from './theme/Global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './theme/theme'

import MoveUp from './components/Floats/MoveUp'
import Products from './modals/Products'
import NavBar from './components/NavBar/NavBar'
import Footer from './Footer/Footer'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <NavBar /> */}
      <Footer />
      {/* <Products /> */}
      <MoveUp />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
