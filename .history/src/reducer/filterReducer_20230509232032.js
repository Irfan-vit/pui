const initialState = {
  fitness: false,
  casual: false,
  "track: false,
  sports: false,
}
const FITNESS = 'fitness'
const CASUAL = 'casual'
const TRACK = 'track'
const SPORTS = 'sports'
const RESET = 'reset'

const filterReducer = (state, action) => {
  console.log(state, action)
  switch (action.type) {
    case FITNESS:
      return { ...state, mens: !state.fitness }
    case CASUAL:
      return { ...state, womens: !state.casual }
    case TRACK:
      return { ...state, track: !state.track }
    case SPORTS:
      return { ...state, track: !state.sports }
    case RESET:
      return initialState
    default:
      throw new Error('Something wrong occured in filter dispatch')
  }
}

export { initialState, filterReducer }
