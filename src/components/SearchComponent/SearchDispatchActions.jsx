import ACTIONS from "../../components/Actions/Actions";
import FetchData from '../DataFetcher/DataFetcher'
export const SearchElements = (searchTerm)  => (dispatch,getState) => {
  // const {Books} = FetchData(0,searchTerm)
  console.log('crap')
  setTimeout(()=>{
    dispatch({
      type: ACTIONS.search,
      payload: searchTerm ,
    });
  },500)

};
// export async function saveNewTodo() {
//     console.log('text')
  
//       return({ type: ACTIONS.search, payload: 'E' })
    
//   }