import Grid from "@material-ui/core/Grid";
import React from "react";
import FetchData from "../DataFetcher/DataFetcher";
import {ScrollComponent} from '../ScrollComponent/ScrollComponent'
import { useGridStyles } from "./BookList.style";
import {BookElement} from '../BookElement/BookElement'
import { useSelector } from "react-redux";

export const BookList = (props) => {
  const classes = useGridStyles();

  const getPage = (state) => state.searchState.page;
  const page = useSelector(getPage);
  const selectBooks = (state) => state.searchState.status;
  const bookQuery = useSelector(selectBooks);
  const {Books, totalCount, hasMore} = FetchData(page,bookQuery);
  let pagesToFetch = (totalCount - page > 40 ) ? 40 : (totalCount - page)
  const {lastBookElementRef} = ScrollComponent( pagesToFetch, hasMore)
  const showLogin = props.showLogin
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
