import { createContext, useContext } from 'react'
import { useReducer } from 'react'
import { initialCartState, cartReducer } from '../reducer/cartReducer'
const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState)
  const addToCart = (_id) => {
    cartState.cart.find((item) => item._id === _id) ? false : true 
  }
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
