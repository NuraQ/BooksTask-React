import React from "react";
import {Grid} from '@material-ui/core';
import {Book} from '../Book/book'
import { useGridStyles } from './BookList.style';

export const BookList = (props) => {
  const classes = useGridStyles();
  let Books = props.Books;
  let lastBookElementRef = props.lastBookElementRef
  return (
    <div container className={classes.root}>
      <Grid container spacing={3}>
        {Books.map((item, index) => {
          if (Books.length === index + 1) {
            return (
              <Book
                title={item.volumeInfo.title}
                element={item}
                key={`${index}`}
                ref={lastBookElementRef}
              />
            );
          } else {
            return (
              <Book
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
