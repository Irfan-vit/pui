import { createContext, useContext } from 'react'
import { useReducer } from 'react'
import { initialCartState, cartReducer } from '../reducer/cartReducer'
const FilterProductsContext = createContext()

const FilterProductsProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(
    cartReducer,
    initialCartState,
  )
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