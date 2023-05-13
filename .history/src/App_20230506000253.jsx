import './utils/colors.css'
import './utils/typography.css'

import {}
import { ThemeProvider } from 'styled-components'

import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <ThemeProvider>
      <NavBar />
    </ThemeProvider>
  )
}

export default App
