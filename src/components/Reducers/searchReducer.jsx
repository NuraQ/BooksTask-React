import ACTIONS from "../Actions/Actions";
const initialState = { status: '', page: 0 };

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.search: {
      return {
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

    default:
      return state;
  }
};
export default SearchReducer;
