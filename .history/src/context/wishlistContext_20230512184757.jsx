import { createContext, useContext } from 'react'
import { useReducer } from 'react'
import { initialCartState, cartReducer } from '../reducer/cartReducer'
const WishlistContext = createContext()

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(
    cartReducer,
    initialCartState,
  )
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
    console.log(_id)
    return cartDispatch({
      type: 'DELETE_ITEM',
      payload: { _id, title, price, categoryName, imgSrc, rating, inCart },
    })
  }

  const getTotal = () => {
    return cartState.cart.reduce((ac, cv) => (ac += cv.price * cv.count), 0)
  }
  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
