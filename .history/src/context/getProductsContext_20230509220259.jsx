import { createContext, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import getProducts from '../queries/getProducts'

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

export { ProductsProvider, useFilterProducts }
