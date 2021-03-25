import React from "react";
import {Grid} from '@material-ui/core';
import {Book} from '../Book/book'
import { useGridStyles } from './BookList.style';

 const BookList = (props) => {
  const classes = useGridStyles();
  let books = props.books;
  return (
    <div container className={classes.root}>
      <Grid container spacing={3}>
        {books.map((item) => {
            return (
              <Book
                title={item.volumeInfo.title}
                element={item}
                key={`${item.id}`}
                />
            )
        })}
      </Grid>
    </div>
  );
};
export default BookList