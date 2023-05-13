import { createContext, useContext } from 'react'
import { useReducer } from 'react'
import { initialCartState, cartReducer } from '../reducer/cartReducer'
const FilterProductsContext = createContext()

const FilterProductsProvider = ({ children }) => {
  const [cartState, cartDis] = useReducer(
    cartReducer,
    initialCartState,
  )
  return (
    <FilterProductsContext.Provider value={{ cartState, cartDis }}>
      {children}
    </FilterProductsContext.Provider>
  )
}

const useFilterProducts = () => useContext(FilterProductsContext)

export { FilterProductsProvider, useFilterProducts }
