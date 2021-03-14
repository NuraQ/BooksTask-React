import Grid from "@material-ui/core/Grid";
import React from "react";
import FetchData from "../DataFetcher/DataFetcher";
import {ScrollComponent} from '../ScrollComponent/ScrollComponent'
import { useGridStyles } from "./BookList.style";
import {BookElement} from '../BookElement/BookElement'


export const BookList = () => {
  const classes = useGridStyles();
  const {lastBookElementRef, page} = ScrollComponent()
  const Books = FetchData(page);

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
