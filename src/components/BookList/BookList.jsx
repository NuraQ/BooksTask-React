import React, { useEffect } from "react";
import { useState } from "react";
import {GridComponent} from '../GridComponents/GridComponent'

const FetchData = () => {
  // 1
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:&maxResults=40&startIndex=0&key=AIzaSyCOBbymaad4eBVNFVF5JC-Pc0TQzE6AHOw`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setItems(data.items);
        console.log("data", data.items);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return items;
};

export default function NestedGrid() {
  const items = FetchData();
  return (
      <GridComponent items={items} />
  );
}
