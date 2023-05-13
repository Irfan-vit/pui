import { createContext, useContext } from 'react'
import { useReducer } from 'react'
import { initialCartState, cartReducer } from '../reducer/cartReducer'
const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState)
  console.log(cartState)
  const addToCart = ({ _id, title, price, categoryName, imgSrc, rating },setDisabled) => {
    console.log(_id)
    setDisabled{}
    return cartDispatch({
      type: 'ADD_TO_CART',
      payload: { _id, title, price, categoryName, imgSrc, rating },
    })
  }
  const removeFromCart = ({
    _id,
    title,
    price,
    categoryName,
    imgSrc,
    rating,
  }) => {
    console.log(_id)
    return cartDispatch({
      type: 'DELETE_ITEM',
      payload: { _id, title, price, categoryName, imgSrc, rating },
    })
  }
  return (
    <CartContext.Provider
      value={{ cartState, cartDispatch, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
