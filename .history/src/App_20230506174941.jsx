import './utils/colors.css'
import './utils/typography.css'

import GlobalStyles from './theme/Global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './theme/theme'

import NavBar from './components/NavBar/NavBar'
import SideNav from './components/SideBar/SideBar'

import ThemeToggle from './components/Floats/ThemeToggle'
import MoveUp from './components/Floats/MoveUp'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavBar />
      </
      <MoveUp />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
