import { useState, useEffect } from "react";
import axios from 'axios';

const FetchData = (page, query) => {
  const [Books, setItems] = useState([]);
  const [totalCount, setCount] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const maxResult = 40;
  useEffect(() => {
    setLoading(true)
    axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:&maxResults=${maxResult}&startIndex=${page}&key=AIzaSyCOBbymaad4eBVNFVF5JC-Pc0TQzE6AHOw`
      , {
        headers: {
            'Content-Type': 'application/json'
        }
    }
   
    )
      .then((response) => {
        setHasMore(true);
        if (response.data.totalItems - 40 === page  || response.data.totalItems  <=  page) {
          setHasMore(false);
          return ;
        } 
        setItems((state) => [...state, ...response.data.items]);
        setCount(response.data.totalItems);
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(()=>{
        setLoading(false)
      })
  }, [page]);
  return { Books, totalCount, hasMore, loading };
};

export default FetchData;