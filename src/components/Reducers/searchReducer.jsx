import ACTIONS from "../Actions/Actions";
import FetchData from "../../components/DataFetcher/DataFetcher";

const initialState = { status: '', page: 0, books:[] };

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.search: {
      return {
        // Again, one less level of nesting to copy
        ...state,
        status: action.payload,
        page: 0,
      };
    }
    case ACTIONS.SCROLL: {
      return {
        ...state,
        page:  action.payload,
      };
    }
    case 'todos/todoAdded': {
      return {
        ...state,
        books: [
          ...state.books,
          action.payload
        ]
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