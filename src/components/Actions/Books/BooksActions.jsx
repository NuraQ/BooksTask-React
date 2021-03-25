import ACTIONS from "../Actions";
import * as ScrollActions from "../InfiniteScrollActions/ScrollActions";
import axios from "axios";

export const getBooksPaginated = () => async (dispatch, getState) => {
  let maxResult = 40;
  let page = getState().searchState.page;
  let searchTerm = getState().searchState.searchTerm;
  try {
    let response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchTerm}&maxResults=${maxResult}&startIndex=${page}&key=AIzaSyCOBbymaad4eBVNFVF5JC-Pc0TQzE6AHOw`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (
      response.data.totalItems - 40 === page ||
      response.data.totalItems <= page
    ) {
      dispatch(ScrollActions.setHasMore(false));
      return;
    }
    dispatch({ type: ACTIONS.ADD_BOOKS, payload: response.data.items });
    dispatch(ScrollActions.setHasMore(true));
  } catch (error) {
    console.log(error);
  } 
};

export const SearchElements = (searchTerm, dispatch) => {
  dispatch({ type: ACTIONS.SEARCH_BOOKS, payload: searchTerm });
  dispatch(getBooksPaginated());
};

export const getAllData = (dispatch) => {
  dispatch(getBooksPaginated());
};