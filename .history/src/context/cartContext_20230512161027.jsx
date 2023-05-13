import { createContext, useContext, useState } from 'react'
import { useReducer } from 'react'
import { initialCartState, cartReducer } from '../reducer/cartReducer'
const CartContext = createContext()

const CartProvider = ({ children }) => {
  const useManage = () => useState(false)
  const [disabled, setDisabled] = useManage()
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState)
  console.log(cartState)
  const addToCart = ({
    _id,
    title,
    price,
    categoryName,
    imgSrc,
    rating,
    inCart,
  }) => {
    setDisabled(true)
    console.log(_id)
    const checkAdd = cartState.cart.find((item) => item._id === _id)
    if (!checkAdd) {
      return cartDispatch({
        type: 'ADD_TO_CART',
        payload: { _id, title, price, categoryName, imgSrc, rating, inCart },
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
    inCart,
  }) => {
    setDisabled(false)
    console.log(_id)
    return cartDispatch({
      type: 'DELETE_ITEM',
      payload: { _id, title, price, categoryName, imgSrc, rating, inCart },
    })
  }
  const increaseQty = ({
    _id,
    title,
    price,
    categoryName,
    imgSrc,
    rating,
    inCart,
  }) => {
    return cartDispatch({
      type: 'INCREASE_QUANTITY',
      payload: { _id, title, price, categoryName, imgSrc, rating, inCart },
    })
  }
  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
        addToCart,
        removeFromCart,
        increaseQty,
        disabled,
        setDisabled,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
