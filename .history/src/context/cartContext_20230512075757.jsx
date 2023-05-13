import { createContext, useContext, useState } from 'react'
import { useReducer } from 'react'
import { initialCartState, cartReducer } from '../reducer/cartReducer'
const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [state, setSate] = useState(false)
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState)
  console.log(cartState)
  const addToCart = ({ _id, title, price, categoryName, imgSrc, rating }) => {
    console.log(_id)
    const checkAdd = cartState.cart.find((item) => item._id === _id)
    if (!checkAdd) {
      setSate(true)
      return cartDispatch({
        type: 'ADD_TO_CART',
        payload: { _id, title, price, categoryName, imgSrc, rating },
      })
    } else {
      return
    }
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
    setSate(true)
    return cartDispatch({
      type: 'DELETE_ITEM',
      payload: { _id, title, price, categoryName, imgSrc, rating },
    })
  }
  return (
    <CartContext.Provider
      value={{ cartState, cartDispatch, addToCart, removeFromCart, state }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
