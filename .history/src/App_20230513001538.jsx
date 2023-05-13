

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <ToastProvider>
          <WishlistProvider>
            <CartProvider>
              <FilterProductsProvider>
                <ProductsProvider>
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
