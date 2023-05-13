/* eslint-disable react/prop-types */
import { createContext, useContext } from 'react'
import { useReducer } from 'react'

import { initialState, filterReducer } from '../reducer/filterReducer'

const FilterProductsContext = createContext()

const FilterProductsProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, initialState)
  // const products = useQuery(['products'], getProducts)
  // console.log(products)
  return (
    <FilterProductsContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterProductsContext.Provider>
  )
}

const useFilterProducts = () => useContext(FilterProductsContext)

export { FilterProductsProvider, useFilterProducts }
