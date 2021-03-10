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

const FormRow = (props) => {
  const classes = useStyles();
  const styles = {
    media: {
      height: "0",
      paddingTop: "56%",
    },
  };
  return (
    <React.Fragment>
      <Grid item xs={12} sm={4} md={3}>
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
              title="Contemplative Reptile"
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
};

export const GridComponent = (props) => {
  const classes = useStyles();

  return (
    <div container className={classes.root}>
      <Grid container spacing={3}>
        {props.items.map((item, index) => {
          return (
            <FormRow
              title={item.volumeInfo.title}
              element={item}
              key={`${index}`}
            />
          );
        })}
      </Grid>
    </div>
  );
};
