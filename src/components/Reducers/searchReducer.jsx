import ACTIONS from "../Actions/Actions";
import FetchData from "../../components/DataFetcher/DataFetcher";

const initialState = { status: '', page: 0, isSearching: false, books:[], hasMore:false};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.search: {
      return {
        // Again, one less level of nesting to copy
        ...state,
        page: 0,
        isSearching: true,
        books: [] ,
      };
    }
    case ACTIONS.SCROLL: {
      return {
        ...state,
        page:  action.payload,
      };
    }
    case ACTIONS.ADD_BOOKS: {
      return {
        ...state,
        books: [
          ...state.books,
          ...action.payload
        ]
      };
    }
    case ACTIONS.SET_HAS_MORE: {
      return {
        ...state,
        hasMore: action.payload
      };
    }

    default:
      return state;
  }
};
export default SearchReducer;

// export async function saveNewTodo(dispatch,getState) {
//   console.log('text')

//     dispatch({ type: ACTIONS.search, payload: 'E' })
  
// }