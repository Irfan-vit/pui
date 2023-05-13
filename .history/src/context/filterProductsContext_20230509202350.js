import { createContext, useContext } from 'react'

import {useReducew}

const FilterProductsContext = createContext()

const FilterProductsProvider = ({ children }) => {
  return <FilterProductsContext.Provider></FilterProductsContext.Provider>
}

const useFilterProducts = () => useContext(FilterProductsContext)

export { FilterProductsProvider, useFilterProducts }
