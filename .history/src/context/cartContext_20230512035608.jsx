import { createContext, useContext } from 'react'
import { useReducer } from 'react'
import { initialCartState, cartReducer } from '../reducer/cartReducer'
const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState)
  const addToCart = ({ _id, title, price, categoryName, imgSrc, rating }) => {
    console.log(_id)
    return cartDispatch({
      type: 'ADD_TO_CART',
      payload: { _id, title, price, categoryName, imgSrc, rating },
    })
  }
const removeFromCart = ({_id})
  return (
    <CartContext.Provider value={{ cartState, cartDispatch, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
