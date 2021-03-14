import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { useStyles } from "./GridComponent.style";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Typography from "@material-ui/core/Typography";
import { useRef, useCallback, useState, forwardRef } from "react";
import FetchData from "../DataFetcher/DataFetcher";

const FormRow = forwardRef((props,ref) => {
  const classes = useStyles();
  const styles = {
    media: {
      height: "0",
      paddingTop: "56%",
    },
  };
  return (
    <React.Fragment>
      <Grid ref={ref} item xs={12} sm={4} md={3}>
        <Card className={classes.elementRoot}>
          <CardActionArea>
            <CardMedia
              style={styles.media}
              image={`${
                props.element.volumeInfo.imageLinks
                  ? props.element.volumeInfo.imageLinks.thumbnail
                  : ""
              } `}
              className={classes.media}
            ></CardMedia>
            <CardContent className={classes.cardContent}>
              <div className={classes.textWrapper}>
                <Typography
                  className={classes.typoFont}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {props.element.volumeInfo.title}
                </Typography>
                <div class={classes.icon}>
                  <MoreVertIcon />
                </div>
              </div>
              <Typography
                className={classes.timePublished}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                2 weeks ago
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </React.Fragment>
  );
});

export const GridComponent = (props) => {
  const classes = useStyles();
  const [page, setPageNumber] = useState(0);
  const Books = FetchData(page);

  const observer = useRef();
  const lastBookElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPageNumber(prevPage => prevPage + 40);
      }
    });
    if (node) observer.current.observe(node);
  }, [Books]);

  return (
    <div container className={classes.root}>
      <Grid container spacing={3}>
        {Books.map((item, index) => {
          if (Books.length === index + 1) {
            return (
              <FormRow
                title={item.volumeInfo.title}
                element={item}
                key={`${index}`}
                ref={lastBookElementRef}
              />
            );
          } else {
            return (
              <FormRow
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
