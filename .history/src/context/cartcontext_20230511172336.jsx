import { createContext, useContext } from 'react'
import { initialCartState, cartReducer } from '../reducer/cartReducer'
const ProductsContext = createContext()

const ProductsProvider = ({ children }) => {

  return (
    <ProductsContext.Provider value={{ products, productsQuery }}>
      {children}
    </ProductsContext.Provider>
  )
}

const useProducts = () => useContext(ProductsContext)

export { ProductsProvider, useProducts }
