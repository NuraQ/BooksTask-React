import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "white",
  },
  logoStyle: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#808080",
    textAlign: "left",
    marginLeft: "4rem",
    width: "200px",
    [theme.breakpoints.down('sm')]: {
      marginLeft: "0.5rem",
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: "1rem",
    },
  },
  menuButton: {
    [theme.breakpoints.down('xs')]: {
      display:'none'
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: "2.5em",

    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: "2.0em",
      fontSize: "0.7em"
    },
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 400,
    size: "18px",
    color: "#808080",
    marginLeft: "4em",
    alignSelf: "stretch",
  },
  

  menuIcon: {
    [theme.breakpoints.up('xs')]: {
      display:'none'
    },
    [theme.breakpoints.down('xs')]: {
      display:'inline-block',
    },
    padding: theme.spacing(0, 2),
    color: 'black'

  }
}));

