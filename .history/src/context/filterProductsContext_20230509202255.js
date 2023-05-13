import { createContext, useContext } from 'react'

const FilterProductsContext = createContext()

const FilterProductsProvider = ({ children }) => {
  return <FilterProductsContext.Provider></FilterProductsContext.Provider>
}

const useFilterProducts = () => useContext(FilterProductsProvider)

export {}
