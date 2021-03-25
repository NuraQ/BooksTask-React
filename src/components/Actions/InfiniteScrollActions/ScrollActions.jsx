
import ACTIONS from "../Actions";
import {getBooksPaginated} from '../Books/BooksActions'
export const setHasMore = (hasMore) => (dispatch, getState) => {
  dispatch({
    type: ACTIONS.SET_HAS_MORE,
    payload: hasMore,
  });
};

export const LoadMoreBooks = (pagesToFetch,dispatch) => {
    dispatch({type: ACTIONS.SCROLL, payload: pagesToFetch});
    dispatch(getBooksPaginated())
}
