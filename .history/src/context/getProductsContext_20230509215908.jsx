import { createContext, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import getProducts from '../queries/getProducts'

const ProductsContext = createContext()

const ProductsProvider = ({ children }) => {
  const products = useQuery(['products', filterState], getProducts)
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}

const useFilterProducts = () => useContext(FilterProductsContext)

export { FilterProductsProvider, useFilterProducts }
