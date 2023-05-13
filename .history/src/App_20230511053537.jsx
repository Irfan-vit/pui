import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { FilterProductsProvider } from './context/filterProductsContext'
import { ProductsProvider } from './context/getProductsContext'

import GlobalStyles from './theme/Global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './theme/theme'

import MoveUp from './components/animations/Floats/MoveUp'
import Home from './modals/Home'
import Cart from './modals/Cart'

import './utils/colors.css'
import './utils/typography.css'

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
