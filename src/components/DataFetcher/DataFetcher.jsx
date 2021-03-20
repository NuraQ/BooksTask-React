import { useState, useEffect } from "react";

const FetchData = (page, query) => {
  const [Books, setItems] = useState([]);
  const [totalCount, setCount] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setItems([]);
  }, [query]);

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${query}&maxResults=40&startIndex=${page}&key=AIzaSyCOBbymaad4eBVNFVF5JC-Pc0TQzE6AHOw`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.totalItems - 40 === page  || data.totalItems  < 0 || data.totalItems  <=  page) {
          setHasMore(false);
          return ;
        } else {
          setHasMore(true);
        }
        setItems((state) => [...state, ...data.items]);
        setCount(data.totalItems);
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [page, query]);
  return { Books, totalCount, hasMore, loading };
};

export default FetchData;
