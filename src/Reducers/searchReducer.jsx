import ACTIONS from "../components/Actions/Actions";

const initialState = {
  searchTerm: "",
  page: 0,
  isSearching: false,
  books: [],
  hasMore: false,
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SEARCH_BOOKS: {
      return {
        // Again, one less level of nesting to copy
        ...state,
        page: 0,
        isSearching: true,
        books: [],
        searchTerm: action.payload,
      };
    }
    case ACTIONS.SCROLL: {
      return {
        ...state,
        page: action.payload,
      };
    }
    case ACTIONS.ADD_BOOKS: {
      return {
        ...state,
        books: [...state.books, ...action.payload],
      };
    }
    case ACTIONS.SET_HAS_MORE: {
      return {
        ...state,
        hasMore: action.payload,
      };
    }

    default:
      return state;
  }
};
export default SearchReducer;
