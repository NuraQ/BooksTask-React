import { useState } from "react";
import { BookList } from "../../components/BookList/BookList";
import { HomeLogo } from "../../components/HomeComponents/HomeLogo";
import { useDispatch, useSelector } from "react-redux";
import Login from "../../components/Login/Login";

const Home = () => {
  const getPage = (state) => state.searchState.page;
  const currentPage = useSelector(getPage);
  const dispatch = useDispatch();
  const selectBooks = (state) => state.searchState.status;
  const bookQuery = useSelector(selectBooks);
  const [displayLogin, setDisplayLogin] = useState(false);
  return (
    <div>
      <HomeLogo />
      {displayLogin ? <Login setDisplayLogin={setDisplayLogin} /> : <div></div>}
      <BookList
        showLogin={setDisplayLogin}
        dispatch={dispatch}
        currentPage={currentPage}
        bookQuery={bookQuery}
      />
    </div>
  );
};

export default Home;
