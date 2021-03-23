import ACTIONS from "../../components/Actions/Actions";

export const SearchElements = (searchTerm)  => (dispatch) => {
   dispatch({
    type: ACTIONS.search,
    payload: searchTerm ,
  });
};
