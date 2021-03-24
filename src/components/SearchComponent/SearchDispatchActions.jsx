import ACTIONS from "../../components/Actions/Actions";
import FetchData from '../DataFetcher/DataFetcher'
export const SearchElements = (searchTerm)  => async(dispatch,getState) => {
  const {page,searchTerm,hasMore,Books} = getState()
  FetchData(
    page,
    searchTerm
  );  

  dispatch({
      type: ACTIONS.search,
      payload: {searchTerm, Books, hasMore} ,
    });

};
