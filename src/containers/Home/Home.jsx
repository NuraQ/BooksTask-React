import {useState} from 'react'
import { BookList } from "../../components/BookList/BookList";
import FetchData from "../../components/DataFetcher/DataFetcher";
import { ScrollComponent } from "../../components/ScrollComponent/ScrollComponent";

const Home = () => {
  const [page, setPageNumber] = useState(0);
  const { Books, totalCount, hasMore, loading } = FetchData(page);
  let pagesToFetch = totalCount - page > 40 ? 40 : totalCount - page;

  const loadMoreContents = () => {
    setPageNumber(page => page + pagesToFetch)
  }
  return (
      <ScrollComponent 
       handleLoadMore={loadMoreContents}
       hasMore={hasMore}
       loading={loading}
       threshold={0.7}
       >
      <BookList setPageNumber={setPageNumber} books={Books} />
      </ScrollComponent>
  );
};

export default Home;
