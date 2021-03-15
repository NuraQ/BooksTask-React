import { useState, useEffect } from "react";

const FetchData = (page) => {

  const [Books,setItems] = useState([]);
  const [totalCount,setCount] = useState(0);

  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {

    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:&maxResults=40&startIndex=${page}&key=AIzaSyCOBbymaad4eBVNFVF5JC-Pc0TQzE6AHOw`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setItems(state => [...state, ...data.items]);
        setCount(data.totalItems)
        if (data.totalItems - 40 === page){
          setHasMore(false)
        }else{
          setHasMore(true)
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [page]);
  return {Books, totalCount, hasMore }
};

export default FetchData;
