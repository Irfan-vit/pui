import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { FilterProductsProvider } from './context/filterProductsContext'
import { ProductsProvider } from './context/getProductsContext'

import GlobalStyles from './utils/theme/Global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './utils/theme/theme'

import MoveUp from './components/animations/Floats/MoveUp'

import './utils/css/colors.css'
import './utils/css/typography.css'
import { CartProvider } from './context/cartContext.jsx'
import { WishlistProvider } from './context/wishlistContext'
import { ToastProvider } from './context/toastContext'
import ToastContainer from './components/toast/ToastContainer'
import ProductDetail from './components/productDetail/ProductDetail.jsx'

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={defaultTheme}>
          <ToastProvider>
            <WishlistProvider>
              <CartProvider>
                <FilterProductsProvider>
                  <ProductsProvider>
                    <App />
                    <MoveUp />
                    <ToastContainer />
                    <GlobalStyles />
                  </ProductsProvider>
                </FilterProductsProvider>
              </CartProvider>
            </WishlistProvider>
          </ToastProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
