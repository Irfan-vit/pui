import { createContext, useContext } from 'react'
import { useReducer } from 'react'
import { filterReducer, initialState } from '../reducer/filterReducer'

const FilterProductsContext = createContext()

const FilterProductsProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, initialState)
  const products = useQuery(['products', filterState], getProducts)
  return (
    <FilterProductsContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterProductsContext.Provider>
  )
}

const useFilterProducts = () => useContext(FilterProductsContext)

export { FilterProductsProvider, useFilterProducts }
