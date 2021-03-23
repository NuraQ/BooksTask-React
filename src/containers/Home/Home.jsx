import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FetchData from "../../components/DataFetcher/DataFetcher";
import { ScrollComponent } from "../../components/ScrollComponent/ScrollComponent";
import { BookList } from "../../components/BookList/BookList";
import { HomeLogo } from "../../components/HomeComponents/HomeLogo";
import Login from "../../components/Login/Login";

const Home = () => {
  const [displayLogin, setDisplayLogin] = useState(false);
  const getPage = (state) => state.searchState.page;
  const currentPage = useSelector(getPage);
  const dispatch = useDispatch();
  const selectBooks = (state) => state.searchState.status;
  const bookQuery = useSelector(selectBooks);

  const { Books, totalCount, hasMore, loading } = FetchData(
    currentPage,
    bookQuery
  );
  let pagesToFetch =
    totalCount - currentPage > 40 ? 40 : totalCount - currentPage;
  const { lastBookElementRef } = ScrollComponent(
    pagesToFetch,
    hasMore,
    dispatch,
    currentPage,
    loading
  );

  return (
    <div>
      <HomeLogo />
      {displayLogin && (
        <Login setDisplayLogin={setDisplayLogin} dispatch={dispatch} />
      )}
      <BookList
        showLogin={setDisplayLogin}
        dispatch={dispatch}
        lastBookElementRef={lastBookElementRef}
        Books={Books}
      />
    </div>
  );
};

export default Home;