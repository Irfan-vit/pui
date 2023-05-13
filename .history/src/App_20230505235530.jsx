import './utils'
import './typography.css'

import { ThemeProvider } from 'styled-components'

import NavBar from './NavBar/NavBar'

function App() {
  return (
    <ThemeProvider>
      <NavBar />
    </ThemeProvider>
  )
}

export default App
