import {useState} from 'react'
import { BookList } from "../../components/BookList/BookList";
import FetchData from "../../components/DataFetcher/DataFetcher";
import { ScrollComponent } from "../../components/ScrollComponent/ScrollComponent";
import { useDispatch, useSelector } from "react-redux";
import ACTIONS from '../../components/Actions/Actions';

const Home = () => {
  const getPage = (state) => state.searchState.page;
  const currentPage = useSelector(getPage);
  const dispatch = useDispatch();

  const booksState = (state) => state.searchState.books;
  const booksFetched = useSelector(booksState)
  console.log(booksFetched)
  const hasMore = (state) => state.searchState.hasMore;
  const more = useSelector(hasMore)
  // let pagesToFetch =
  //   totalCount - currentPage > 40 ? 40 : totalCount - currentPage;
    const loadMoreContents = () => {
      dispatch({type: ACTIONS.SCROLL, payload: currentPage + 1})
    }
  return (
      <ScrollComponent 
       handleLoadMore={loadMoreContents}
       hasMore={more}
      //  loading={loading}
       threshold={0.7}
       >
         {(booksFetched.length != 0) &&      
         <BookList  books={booksFetched} />
         }
      </ScrollComponent>
  );
};

export default Home;
