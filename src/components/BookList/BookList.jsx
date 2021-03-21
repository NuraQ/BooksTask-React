import Grid from "@material-ui/core/Grid";
import React from "react";
import { useGridStyles } from "./BookList.style";
import { BookElement } from "../BookElement/BookElement";

export const BookList = (props) => {
  const classes = useGridStyles();
  let Books = props.Books;
  let showLogin = props.showLogin;
  let lastBookElementRef = props.lastBookElementRef;
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
