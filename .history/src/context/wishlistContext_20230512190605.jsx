import { createContext, useContext } from 'react'
import { useReducer } from 'react'
import {
  initialWishlistState,
  wishlistReducer,
} from '../reducer/wishlistReducer'
const WishlistContext = createContext()

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
    const checkAdd = wishlistState.wishlist.find((item) => item._id === _id)
    if (!checkAdd) {
      return wishlistDispatch({
        type: 'ADD_TO_CART',
        payload: { _id, title, price, categoryName, imgSrc, rating, inCart },
      })
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlistState,
        wishlistDispatch,
        addToWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }
