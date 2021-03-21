
import React, {forwardRef} from "react";
import {CardActionArea, Card, CardContent, CardMedia, Typography, Grid} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {useBookStyle} from './BookElement.style'

export const BookElement = forwardRef((props,ref) => {
    const classes = useBookStyle();
  
    return (
      <React.Fragment>
        <Grid ref={ref} item xs={12} sm={4} md={3}>
          <Card className={classes.elementRoot}>
            <CardActionArea>
              <CardMedia
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