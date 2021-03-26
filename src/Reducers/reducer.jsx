import searchReducer from "../Reducers/searchReducer";

export default function rootReducer(state = {}, action) {
  return {
    searchState: searchReducer(state.searchState, action),
  };
}
