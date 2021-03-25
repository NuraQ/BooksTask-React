import { useState, useEffect } from "react";
import axios from "axios";
import * as FetachActions from "./FetcherActions";

const FetchData = async (page, query, dispatch) => {
  const maxResult = 40;

  await axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${query}&maxResults=${maxResult}&startIndex=${page}&key=AIzaSyCOBbymaad4eBVNFVF5JC-Pc0TQzE6AHOw`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      dispatch(FetachActions.setHasMore(true));
      if (
        response.data.totalItems - 40 === page ||
        response.data.totalItems <= page
      ) {
        dispatch(FetachActions.setHasMore(false));
        return;
      }
      dispatch(FetachActions.addElements(response.data.items));
      // setCount(response.data.totalItems);
    })
    .catch((error) => {
      console.error("Error:", error);
    })
    .finally(() => {
      // setLoading(false)
    });
};
export default FetchData;
