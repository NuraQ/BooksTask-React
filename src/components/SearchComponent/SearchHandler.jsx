import {useState} from 'react'
import { BookList } from "../../components/BookList/BookList";
import { ScrollComponent } from "../../components/ScrollComponent/ScrollComponent";
import { useDispatch, useSelector } from "react-redux";
import ACTIONS from '../../components/Actions/Actions';

const SearchHandler = () => {
    const getPage = (state) => state.searchState.page;
    const currentPage = useSelector(getPage);
    const dispatch = useDispatch();
    const booksState = (state) => state.searchState.books;
    const booksFetched = useSelector(booksState);
    console.log(booksFetched);
    const hasMore = (state) => state.searchState.hasMore;
    const more = useSelector(hasMore);
    const selectBooks = (state) => state.searchState.searchTerm;
    const bookQuery = useSelector(selectBooks);
    // let pagesToFetch =
    //   totalCount - currentPage > 40 ? 40 : totalCount - currentPage;
  
    const loadMoreContents = () => {
      dispatch({ type: ACTIONS.SCROLL, payload: currentPage + 40 });
    };
  return (
      <ScrollComponent 
       handleLoadMore={loadMoreContents}
       hasMore={more}
       threshold={0.7}
       >
      <BookList  books={booksFetched} />
      </ScrollComponent>
  );
};

export default SearchHandler;
