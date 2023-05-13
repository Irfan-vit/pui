const initialWishlistState = {
  wishlist: [],
}
const ADD_TO_CART = 'ADD_TO_CART'
const DELETE_ITEM = 'DELETE_ITEM'
// const RESET = 'RE.payload
// const INITIALIZE .payload
function wishlistReducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        wishlist: [...state.wishlist, { ...action.payload, inWishlist: true }],
      }
    case DELETE_ITEM:
      return {
        wishlist: state.wishlist.filter(
          (item) => item._id !== action.payload._id,
        ),
      }
  }
}

export { initialWishlistState, wishlistReducer }
