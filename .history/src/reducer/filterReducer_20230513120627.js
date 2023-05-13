const initialState = {
  fitness: false,
  casual: false,
  track: false,
  sports: false,
  sortBy: null,
  rating: null,
}
const FITNESS = 'fitness'
const CASUAL = 'casual'
const TRACK = 'track'
const SPORTS = 'sports'
const RESET = 'reset'
const HIGH_TO_LOW = 'HIGH_TO_LOW'
const LOW_TO_HIGH = 'LOW_TO_HIGH'
const RATING = 'rating'

const filterReducer = (state, action) => {
  // console.log(state, action)
  switch (action.type) {
    case FITNESS:
      return { ...state, fitness: !state.fitness }
    case CASUAL:
      return { ...state, casual: !state.casual }
    case TRACK:
      return { ...state, track: !state.track }
    case SPORTS:
      return { ...state, sports: !state.sports }
    case HIGH_TO_LOW:
      return { ...state, sortBy: 'HIGH_TO_LOW' }
    case LOW_TO_HIGH:
      return { ...state, sortBy: 'LOW_TO_HIGH' }
    case RESET:
      return initialState
    default:
      throw new Error('Something wrong occured in filter dispatch')
  }
}

export { initialState, filterReducer }
