import { createContext, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import getProducts from '../queries/getProducts'

const FilterProductsContext = createContext()

const FilterProductsProvider = ({ children }) => {
  const products = useQuery(['products', filterState], getProducts)
  return (
    <FilterProductsContext.Provider
      value={{ filterState, filterDispatch, products }}
    >
      {children}
    </FilterProductsContext.Provider>
  )
}

const useFilterProducts = () => useContext(FilterProductsContext)

export { FilterProductsProvider, useFilterProducts }
