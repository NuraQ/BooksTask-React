import {useState} from 'react'
import { BookList } from "../../components/BookList/BookList";
import FetchData from "../../components/DataFetcher/DataFetcher";
import { ScrollComponent } from "../../components/ScrollComponent/ScrollComponent";

const Home = () => {
  const [page, setPageNumber] = useState(0);
  const { Books, totalCount, hasMore, loading } = FetchData(page);
  let pagesToFetch = totalCount - page > 40 ? 40 : totalCount - page;
  const { lastBookElementRef } = ScrollComponent(
    setPageNumber,
    pagesToFetch,
    hasMore,
    loading
  );
  return (
    <div>
      <BookList setPageNumber={setPageNumber} lastBookElementRef={lastBookElementRef} Books={Books} />
    </div>
  );
};

export default Home;
