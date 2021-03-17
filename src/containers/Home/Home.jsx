import { BookList } from "../../components/BookList/BookList";
import { HomeLogo } from "../../components/HomeComponents/HomeLogo";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const getPage = (state) => state.searchState.page;
  const currentPage = useSelector(getPage);
  const dispatch = useDispatch();
  const selectBooks = (state) => state.searchState.status;
  const bookQuery = useSelector(selectBooks);

  return (
    <div>
      <HomeLogo />
      <BookList  dispatch={dispatch} currentPage={currentPage} bookQuery={bookQuery} />
    </div>
  );
};

export default Home;
