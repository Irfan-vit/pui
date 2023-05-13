const initialCartState = []
const ADD_TO_CART = 'ADD_TO_CART'
// const DELETE_ITEM = 'DELETE_ITEM'
// const DELETE_EXTRA_ITEM = 'DELETE_EXTRA_ITEM'
// const DECREASE_QUANTITY = 'DECREASE_QUANTITY'
// const INCREASE_QUANTITY = 'INCREASE_QUANTITY'
// const RESET = 'RE.payload
// const INITIALIZE .payload
function cartReducer(state, action) {
  console.log(action.payload, 'payload')
  switch (action.type) {
    case ADD_TO_CART:
      return state.push(action.payload)
  }
}

export { initialCartState, cartReducer }
