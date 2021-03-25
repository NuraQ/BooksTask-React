import { useEffect, useState } from "react";
import  BookList from "../../components/BookList/BookList";
import FetchData from "../../components/DataFetcher/DataFetcher";
import { ScrollComponent } from "../../components/ScrollComponent/ScrollComponent";
import { useDispatch, useSelector } from "react-redux";
import {ScrollAction} from '../../components/ScrollComponent/ScrollActions';

const Home = () => {
  const dispatch = useDispatch();
  const booksState = (state) => state.searchState.books;
  const booksFetched = useSelector(booksState);
  const hasMore = (state) => state.searchState.hasMore;
  const more = useSelector(hasMore);

    useEffect(() => {
    FetchData(0, "", dispatch);
  }, []);

  const loadMoreContents = () => {
    dispatch(ScrollAction())
  };
  return (
    <ScrollComponent
      handleLoadMore={loadMoreContents}
      hasMore={more}
      threshold={1}
    >
     <BookList books={booksFetched} />
    </ScrollComponent>
  );
};

export default Home;
