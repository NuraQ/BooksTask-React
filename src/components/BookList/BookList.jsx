import React from "react";
import {Grid} from '@material-ui/core';
import {Book} from '../Book/book'
import { useGridStyles } from './BookList.style';

export const BookList = (props) => {
  const classes = useGridStyles();
  let Books = props.books;
  return (
    <div container className={classes.root}>
      <Grid container spacing={3}>
        {Books.map((item, index) => {
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
