import './utils/colors.css'
import './utils/typography.css'

import GlobalStyles from './theme/Global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './theme/theme'

import NavBar from './components/NavBar/NavBar'
import ThemeToggle from './components/Floats/ThemeToggle'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavBar />
      <ThemeToggle />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
