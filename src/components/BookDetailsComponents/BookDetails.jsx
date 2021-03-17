import React from "react";
import { useStyles } from "./BookDetails.style";
import {
  Button,
  Grid,
  Paper,
  Typography,
  ButtonBase,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

const BookDetailsData = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src={`${
                  props.Book.volumeInfo.imageLinks
                    ? props.Book.volumeInfo.imageLinks.thumbnail
                    : ""
                }`}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column">
              <Grid xs={12} spacing={3} container item>
                <Grid item>
                  <Typography gutterBottom variant="subtitle1">
                    {props.Book.volumeInfo.title}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" gutterBottom>
                    {props.Book.volumeInfo.authors}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography item variant="body2" color="textSecondary">
                    ID: 1030114
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" disableElevation>
                    Buy Book
                  </Button>
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
                <Rating
                  name="simple-controlled"
                 
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default BookDetailsData;
