import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useBookStyle } from "./BookElement.style";
import React, { forwardRef, useState } from "react";
import {WithAuth} from '../../components/WithAuth/WithAuth'
import history from '../../routes/history';
import {useSelector} from 'react-redux'

export const BookElement = forwardRef((props, ref) => {
  const classes = useBookStyle();
  const selectCurenntUser = (state) => state.AuthState;
  const currentUser = useSelector(selectCurenntUser);

  const navigate = (element,showLogin) => {
    if (currentUser.isLogged){
      console.log('nav',currentUser.isLogged)
      history.push({
        pathname: '/BookDetails',
        state: element
      })
    } else{
      showLogin(true)
    }
  };
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
              onClick={() => {navigate(props.element, props.showLogin)}}
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
