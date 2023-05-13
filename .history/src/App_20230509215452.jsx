import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { FilterProductsProvider } from './context/filterProductsContext'

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
import Home from './modals/Home'
import CartCard from './components/cards/CartCard'
import Cart from './modals/Cart'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FilterProductsProvider>
        <ThemeProvider theme={defaultTheme}>
          {/* <NavBar /> */}
          {/* <Hero /> */}
          {/* <Mission /> */}
          {/* <FeaturedCards /> */}
          {/* <CartCard /> */}
          {/* <Footer /> */}

          {/* <Cart /> */}
          {/* <Home /> */}
          <Products />
          <MoveUp />
          <GlobalStyles />
        </ThemeProvider>
      </FilterProductsProvider>
    </QueryClientProvider>
  )
}

export default App
