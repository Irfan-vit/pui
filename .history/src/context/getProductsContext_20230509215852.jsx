import { createContext, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import getProducts from '../queries/getProducts'

const ProductsContext = createContext()

const PProductsProvider = ({ children }) => {
  const products = useQuery(['products', filterState], getProducts)
  return (
    <ProductsContext.Provider
      value={{ filterState, filterDispatch, products }}
    >
      {children}
    </FilterProductsContext.Provider>
  )
}

const useFilterProducts = () => useContext(FilterProductsContext)

export { FilterProductsProvider, useFilterProducts }
