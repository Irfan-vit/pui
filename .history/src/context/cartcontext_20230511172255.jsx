import { createContext, useContext } from 'react'

const ProductsContext = createContext()

const ProductsProvider = ({ children }) => {
  const productsQuery = useQuery(['products'], getProducts)
  const products = productsQuery?.data ?? []

  return (
    <ProductsContext.Provider value={{ products, productsQuery }}>
      {children}
    </ProductsContext.Provider>
  )
}

const useProducts = () => useContext(ProductsContext)

export { ProductsProvider, useProducts }