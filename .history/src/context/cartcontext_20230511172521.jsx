import { createContext, useContext } from 'react'
import { useReducer } from 'react'
import { initialCartState, cartReducer } from '../reducer/cartReducer'
const ProductsContext = createContext()

const ProductsProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(
    cartReducer,
    initialCartState,
  )
  return (
    <ProductsContext.Provider value={{ products, productsQuery }}>
      {children}
    </ProductsContext.Provider>
  )
}

const useProducts = () => useContext(ProductsContext)

export { ProductsProvider, useProducts }
