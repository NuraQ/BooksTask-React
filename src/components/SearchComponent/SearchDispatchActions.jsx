import ACTIONS from "../../components/Actions/Actions";
import FetchData from '../DataFetcher/DataFetcher'
export const SearchElements = (searchTerm) => (dispatch,getState) => {
     FetchData(
    0,
    searchTerm, dispatch
  );  

dispatch({type:ACTIONS.search})
};
