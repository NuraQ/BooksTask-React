import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {useStyles} from './BookDetails.style'

const BookDetailsData = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={`${props.Book.volumeInfo.imageLinks
                  ? props.Book.volumeInfo.imageLinks.thumbnail
                  : ""}`} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                     {props.Book.volumeInfo.title}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      { props.Book.volumeInfo.authors}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      ID: 1030114
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">$19.00</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      );
}
export default BookDetailsData