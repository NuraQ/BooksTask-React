import Grid from "@material-ui/core/Grid";
import React, {useState} from "react";
import FetchData from "../DataFetcher/DataFetcher";
import {ScrollComponent} from '../ScrollComponent/ScrollComponent'
import { useGridStyles } from "./BookList.style";
import {BookElement} from '../BookElement/BookElement'


export const BookList = () => {
  
  const classes = useGridStyles();
  const [page, setPageNumber] = useState(0);
  const {Books, totalCount} = FetchData(page);
  console.log("cheking stuff", totalCount, "page  ", page )
  
  let pagesToFetch = (totalCount - page >= 40 ) ? 40 : (totalCount - page)
  console.log(`page  ${page}   total ${pagesToFetch}`)
  const {lastBookElementRef} = ScrollComponent(setPageNumber, pagesToFetch, page)
  
  return (
    <div container className={classes.root}>
      <Grid container spacing={3}>
        {Books.map((item, index) => {
          if (Books.length === index + 1) {
            return (
              <BookElement
                title={item.volumeInfo.title}
                element={item}
                key={`${index}`}
                ref={lastBookElementRef}
              />
            );
          } else {
            return (
              <BookElement
                title={item.volumeInfo.title}
                element={item}
                key={`${index}`}
              />
            );
          }
        })}
      </Grid>
    </div>
  );
};
