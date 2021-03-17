import React, {useState} from "react";
import {Grid} from '@material-ui/core';
import FetchData from "../DataFetcher/DataFetcher";
import {ScrollComponent} from '../ScrollComponent/ScrollComponent';
import {BookElement} from '../BookElement/BookElement'
import { useGridStyles } from './BookList.style';


export const BookList = () => {
  
  const [page, setPageNumber] = useState(0)
  const {Books, totalCount, hasMore, loading} = FetchData(page);
  let pagesToFetch = (totalCount - page > 40 ) ? 40 : (totalCount - page)
  const {lastBookElementRef} = ScrollComponent(setPageNumber, pagesToFetch, hasMore, loading)
  const classes = useGridStyles();

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
