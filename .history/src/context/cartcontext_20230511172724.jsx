import { createContext, useContext } from 'react'
import { useReducer } from 'react'
import { initialCartState, cartReducer } from '../reducer/cartReducer'
const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState)
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </cartContext.Provider>
  )
}

const usecart = () => useContext(cartContext)

export { cartProvider, usecart }
