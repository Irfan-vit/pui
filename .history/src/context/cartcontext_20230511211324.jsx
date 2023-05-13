import { createContext, useContext } from 'react'
import { useReducer } from 'react'
import { initialCartState, cartReducer } from '../reducer/cartReducer'
const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState)
  const addToCart = (
    { _id, title, price, categoryName, imgSrc, rating },
    id,
  ) => {
    console.log(_id)
    const checkCopy = cartState.cart.find((item) => item._id === product._id)
      ? false
      : true
    if (checkCopy) {
      console.log(product, 'cart products')
      return cartDispatch({ type: 'ADD_TO_CART', payload: product })
    } else {
      console.log('copy found')
    }
  }
  return (
    <CartContext.Provider value={{ cartState, cartDispatch, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
