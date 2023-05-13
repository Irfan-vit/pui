import { casualT1 } from '../assets/index'
const initialCartState = {
  cart: [],
}
const ADD_TO_CART = 'ADD_TO_CART'
// const DELETE_ITEM = 'DELETE_ITEM'
// const DELETE_EXTRA_ITEM = 'DELETE_EXTRA_ITEM'
// const DECREASE_QUANTITY = 'DECREASE_QUANTITY'
// const INCREASE_QUANTITY = 'INCREASE_QUANTITY'
// const RESET = 'RESET'
// const INITIALIZE = 'INITIALIZE'
// const CHECKOUT = 'CHECKOUT'
function cartReducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {...state, }
  }
}

export { initialCartState, cartReducer }
