const initialCartState = {
  cart: [],
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
        cart: [...state.cart, { ...action.payload, count: 1, inCart: true }],
      }
    case DELETE_ITEM:
      console.log(state.cart, action.payload)
      return {
        cart: state.cart.filter((item) => item._id !== action.payload._id),
      }
    case INCREASE_QUANTITY:
      return {
        cart: state.cart.map((item) =>
          item._id === action.payload._id
            ? { ...item, count: item.count + 1 }
            : item,
        ),
      }
    case DECREASE_QUANTITY:
      return {
        cart: state.cart.map((item) =>
          item._id === action.payload._id && item.count > 1
            ? { ...item, count: item.count - 1 }
            : { ...item },
        ),
      }
    // return [...state, action.payload]
  }
}

export { initialCartState, cartReducer }
