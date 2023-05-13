import { createContext, useContext } from 'react'
import { useReducer } from 'react'
import { initialCartState, cartReducer } from '../reducer/cartReducer'
const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState)
  const addToCart = (product) => {
    const checkCopy = cartState.cart.find((item) => item._id === product._id)
      ? false
      : true
      if(checkCopy) {
      ? cartDispatch({ type: 'ADD_TO_CART', payload: product })
      }
  }
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
