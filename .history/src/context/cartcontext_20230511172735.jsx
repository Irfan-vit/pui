import { createContext, useContext } from 'react'
import { useReducer } from 'react'
import { initialCartState, cartReducer } from '../reducer/cartReducer'
const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState)
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  )
}

const usecart = () => useContext(CartContext)

export { CartProvider, usecart }
