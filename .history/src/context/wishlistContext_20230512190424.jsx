import { createContext, useContext } from 'react'
import { useReducer } from 'react'
import {
  initialWishlistState,
  wishlistReducer,
} from '../reducer/wishlistReducer'
const  = createContext()

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialWishlistState,
  )

  const addToWishlist = ({
    _id,
    title,
    price,
    categoryName,
    imgSrc,
    rating,
    inCart,
  }) => {
    console.log(_id)
    const checkAdd = wishlistState.cart.find((item) => item._id === _id)
    if (!checkAdd) {
      return wishlistDispatch({
        type: 'ADD_TO_CART',
        payload: { _id, title, price, categoryName, imgSrc, rating, inCart },
      })
    } else {
      return
    }
  }

  return (
    <.Provider
      value={{
        wishlistState,
        wishlistDispatch,
        addToWishlist,
      }}
    >
      {children}
    </.Provider>
  )
}

const useWishlist = () => useContext()

export { WishlistProvider, useWishlist }
