import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { FilterProductsProvider } from './context/filterProductsContext'
import { ProductsProvider } from './context/getProductsContext'

import GlobalStyles from './utils/theme/Global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './utils/theme/theme'

import MoveUp from './components/animations/Floats/MoveUp'
import Home from './modals/Home'
import Cart from './modals/Cart'

import './utils/css/colors.css'
import './utils/css/typography.css'
import { CartProvider } from './context/cartcontext'

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
          <CartProvider>
            <ThemeProvider theme={defaultTheme}>
              <Cart />
              
              <Home />
              <MoveUp />
              <GlobalStyles />
            </ThemeProvider>
          </CartProvider>
        </FilterProductsProvider>
      </ProductsProvider>
    </QueryClientProvider>
  )
}

export default App
