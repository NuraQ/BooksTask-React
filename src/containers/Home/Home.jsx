import { useEffect, useState } from "react";
import { BookList } from "../../components/BookList/BookList";
import { ScrollComponent } from "../../components/ScrollComponent/ScrollComponent";
import { useDispatch, useSelector } from "react-redux";
import { LoadMoreBooks } from "../../components/Actions/InfiniteScrollActions/ScrollActions";
import { getAllData } from "../../components/Actions/Books/BooksActions";
const Home = () => {
  const dispatch = useDispatch();
  const booksState = (state) => state.searchState.books;
  const booksFetched = useSelector(booksState);
  const hasMore = (state) => state.searchState.hasMore;
  const more = useSelector(hasMore);

  useEffect(() => {
    getAllData(dispatch);
  }, []);

  const loadMoreContents = () => {
    LoadMoreBooks(40, dispatch);
  };
  return (
    <ScrollComponent
      handleLoadMore={loadMoreContents}
      hasMore={more}
      threshold={0.7}
    >
      <BookList books={booksFetched} />
    </ScrollComponent>
  );
};

export default Home;
