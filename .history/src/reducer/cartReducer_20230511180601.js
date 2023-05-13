import { casualT1 } from '../assets/img/casu'
const initialCartState = {
  cart: [
    {
      _id: 786,
      isFeatured: false,
      title: 'Vans Old Skool',
      price: '5499',
      categoryName: 'casual',
      inWishlist: true,
      imgSrc: casualT1,
      rating: 4.5,
    },
  ],
  totalPrice: 0,
}
const ADD_TO_CART = 'ADD_TO_CART'
const DELETE_ITEM = 'DELETE_ITEM'
const DELETE_EXTRA_ITEM = 'DELETE_EXTRA_ITEM'
const DECREASE_QUANTITY = 'DECREASE_QUANTITY'
const INCREASE_QUANTITY = 'INCREASE_QUANTITY'
const RESET = 'RESET'
const INITIALIZE = 'INITIALIZE'
const CHECKOUT = 'CHECKOUT'
function cartReducer(state, action) {
  console.log(state)
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...action.payload] }
    case DELETE_ITEM:
      console.log('in delete')
      return { ...state, cart: [...action.payload] }
    case DELETE_EXTRA_ITEM:
      console.log('in delete extra')
      return { ...state, cart: [...action.payload] }
    case DECREASE_QUANTITY:
      return { ...state, cart: [...action.payload] }
    case INCREASE_QUANTITY:
      return { ...state, cart: [...action.payload] }
    case RESET:
      return { ...state, cart: [] }
    case INITIALIZE:
      return { ...state, cart: [...action.payload] }
    case CHECKOUT:
      return { ...state, cart: [] }
    default:
      return { ...state }
  }
}

export { initialCartState, cartReducer }
