import ACTIONS from "../../components/Actions/Actions";
import FetchData from '../DataFetcher/DataFetcher'

export const addElements = (books)  => (dispatch,getState) => {
    dispatch({
      type: ACTIONS.ADD_BOOKS,
      payload: books 
    });
};

export const setHasMore = (hasMore)  => (dispatch,getState) => {
    dispatch({
      type: ACTIONS.SET_HAS_MORE,
      payload: hasMore 
    });
};
