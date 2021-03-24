import {useState} from 'react'
import { BookList } from "../../components/BookList/BookList";
import FetchData from "../../components/DataFetcher/DataFetcher";
import { ScrollComponent } from "../../components/ScrollComponent/ScrollComponent";
import { useDispatch, useSelector } from "react-redux";
import ACTIONS from '../../components/Actions/Actions';

const SearchHandler = () => {
  const getPage = (state) => state.searchState.page;
  const currentPage = useSelector(getPage);
  const dispatch = useDispatch();
  const selectBooks = (state) => state.searchState.status;
  const bookQuery = useSelector(selectBooks);
  const booksState = (state) => state.searchState.books;
  const booksFetched = useSelector(booksState)
  const { Books, totalCount, hasMore, loading } = FetchData(
    currentPage,
    bookQuery
  );
  let pagesToFetch =
    totalCount - currentPage > 40 ? 40 : totalCount - currentPage;
    const loadMoreContents = () => {
      dispatch({type: ACTIONS.SCROLL, payload: currentPage + pagesToFetch})
    }
  return (
      <ScrollComponent 
       handleLoadMore={loadMoreContents}
       hasMore={hasMore}
       loading={loading}
       threshold={0.7}
       >
      <BookList  books={Books} />
      </ScrollComponent>
  );
};

export default SearchHandler;
