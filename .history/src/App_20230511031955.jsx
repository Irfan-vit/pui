import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { FilterProductsProvider } from './context/filterProductsContext'
import { ProductsProvider } from './context/getProductsContext'

import './utils/colors.css'
import './utils/typography.css'

import GlobalStyles from './utils/theme/Global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './utils/theme/theme'

import MoveUp from './components/animations/Floats/MoveUp'
import Products from './components/modals/Products'
import NavBar from './components/navBar/NavBar'
import Footer from './components/footer/Footer'
import Hero from './components/hero/HeroImg'
import Mission from './components/mission/Mission'
import FeaturedCards from './components/modals/FeaturedCards'
import Home from './components/modals/Home'
import CartCard from './components/cards/CartCard'
import Cart from './components/modals/Cart'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsProvider>
        <FilterProductsProvider>
          <ThemeProvider theme={defaultTheme}>
            {/* <NavBar /> */}
            {/* <Hero /> */}
            {/* <Mission /> */}
            {/* <FeaturedCards /> */}
            {/* <CartCard /> */}
            {/* <Products /> */}
            {/* <Footer /> */}

            <Cart />
            <Home />

            <MoveUp />
            <GlobalStyles />
          </ThemeProvider>
        </FilterProductsProvider>
      </ProductsProvider>
    </QueryClientProvider>
  )
}

export default App
