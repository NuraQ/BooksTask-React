import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import React  from "react";
import {useStyles} from './GridComponent.style'
const FormRow = () => {
    const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item xs={3}>
        <Paper className={classes.paper}>item</Paper>
      </Grid>
    </React.Fragment>
  );
};

export const GridComponent = (props) => {
    const classes = useStyles();

  return (
    <div className={classes.root}>

    <Grid container spacing={3}>
      {props.items.map((ele, index) => {
        return <FormRow key={`${index}`} />;
      })}
    </Grid>
    </div>
  );
};
