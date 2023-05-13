const initialCartState = {
  wishlist: [],
}
const ADD_TO_CART = 'ADD_TO_CART'
const DELETE_ITEM = 'DELETE_ITEM'
// const DELETE_EXTRA_ITEM = 'DELETE_EXTRA_ITEM'
const DECREASE_QUANTITY = 'DECREASE_QUANTITY'
const INCREASE_QUANTITY = 'INCREASE_QUANTITY'
// const RESET = 'RE.payload
// const INITIALIZE .payload
function cartReducer(state, action) {
  console.log(action.payload, 'payload')
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.wishlist, { ...action.payload, inWishlist: true }],
      }
    case DELETE_ITEM:
      console.log(state.wishlist, action.payload)
      return {
        cart: state.wishlist.filter((item) => item._id !== action.payload._id),
      }
  }
}

export { initialCartState, cartReducer }
