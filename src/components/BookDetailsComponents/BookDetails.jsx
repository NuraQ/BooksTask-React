import React from "react";
import { Grid, Paper, Typography, ButtonBase } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { CreditCard } from "../CreditCardPopUp/CreditCard";
import { useStyles } from "./BookDetails.style";

const BookDetailsData = (props) => {
  const classes = useStyles();
  const bookImage =  (props.Book.volumeInfo.imageLinks &&
      props.Book.volumeInfo.imageLinks.thumbnail) ||
    "";
  const description = ( props.Book.volumeInfo.description
    && props.Book.volumeInfo.description)
    || "";

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="book" src={bookImage} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction={classes.column}>
              <Grid xs={12} spacing={3} container item>
                <Grid item>
                  <Typography gutterBottom variant="h5">
                    {props.Book.volumeInfo.title}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" gutterBottom>
                    {props.Book.volumeInfo.authors}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    item
                    variant="body2"
                    className={classes.secondary}
                  >
                    ID: {props.Book.id}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <CreditCard />
                </Grid>
              </Grid>
            </Grid>
            <Grid container xs direction="column" spacing={3}>
              <Grid item>
                <Typography className={classes.price} variant="subtitle1">
                  $19.00
                </Typography>
              </Grid>
              <Grid item>
                <Rating name="simple-controlled" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Typography className={classes.description}>
        {description}
      </Typography>
    </div>
  );
};
export default BookDetailsData;
