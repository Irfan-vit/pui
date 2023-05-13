import './utils/colors.css'
import './utils/typography.css'

import GlobalStyles from './theme/Global'


import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <ThemeProvider>
      <NavBar />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
