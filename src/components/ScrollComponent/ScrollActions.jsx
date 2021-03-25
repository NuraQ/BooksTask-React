import ACTIONS from "../../components/Actions/Actions";
import FetchData from "../DataFetcher/DataFetcher";
export const ScrollAction = () => (dispatch, getState) => {
  let page = getState().searchState.page + 40;
  let query = getState().searchState.searchTerm;
  console.log(getState())
  FetchData(page, query, dispatch);
};
