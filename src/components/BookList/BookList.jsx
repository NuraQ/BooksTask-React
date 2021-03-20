import Grid from "@material-ui/core/Grid";
import React from "react";
import FetchData from "../DataFetcher/DataFetcher";
import {ScrollComponent} from '../ScrollComponent/ScrollComponent'
import { useGridStyles } from "./BookList.style";
import {BookElement} from '../BookElement/BookElement'

export const BookList = (props) => {
  const classes = useGridStyles();
  let bookQuery = props.bookQuery;
  let currentPage = props.currentPage;
  const {Books, totalCount, hasMore, loading} = FetchData(currentPage,bookQuery);
  let pagesToFetch = (totalCount - currentPage > 40 ) ? 40 : (totalCount - currentPage)
  const {lastBookElementRef} = ScrollComponent( pagesToFetch, hasMore, props.dispatch, currentPage, loading)
  
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
                showLogin={showLogin}
              />
            );
          } else {
            return (
              <BookElement
                title={item.volumeInfo.title}
                element={item}
                key={`${index}`}
                showLogin={showLogin}
              />
            );
          }
        })}
      </Grid>
    </div>
  );
};
