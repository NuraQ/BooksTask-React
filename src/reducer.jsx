import searchReducer from './components/Reducers/searchReducer'

export default function rootReducer(state = {}, action) {
  // always return a new object for the root state
  return {
    // the value of `state.todos` is whatever the todos reducer returns
    searchState: searchReducer(state.searchState, action),

  }
}