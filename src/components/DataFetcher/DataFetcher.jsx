import { useState, useEffect } from "react";

const FetchData = (page) => {

  const [items,setItems] = useState([]);
  // const [hasMore, setHasMore] = useState(false)

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
        // setHasMore(data.totalItems > 0)

      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [page]);
  return items
};

export default FetchData;
