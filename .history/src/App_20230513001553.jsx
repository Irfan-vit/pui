import Home from './modals/Home'
import Cart from './modals/Cart'
import Product from './modals/Products'

function App() {
  return (
                  <Cart />
                  <Product />
                  <Home />
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
  )
}

export default App
