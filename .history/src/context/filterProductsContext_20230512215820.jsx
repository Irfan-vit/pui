import { createContext, useContext } from 'react'
import { useReducer } from 'react'
import { filterReducer, initialState } from '../reducer/filterReducer'
import { useQuery } from '@tanstack/react-query'
import getProducts from '../queries/getProducts'

const FilterProductsContext = createContext()

const FilterProductsProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, initialState)
  const products = useQuery(['products', filterState], getProducts)
  const [search, setSearch] = useS('')
  return (
    <FilterProductsContext.Provider
      value={{ filterState, filterDispatch, products, search, setSearch }}
    >
      {children}
    </FilterProductsContext.Provider>
  )
}

const useFilterProducts = () => useContext(FilterProductsContext)

export { FilterProductsProvider, useFilterProducts }
