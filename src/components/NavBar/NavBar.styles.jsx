import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "white",
  },
  logoStyle: {
    fontFamily: " sans-serif",
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
      marginLeft: "2em",
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: "1.0em",
    },
   
    fontWeight: 400,
    size: "18px",
    color: "#808080",
    marginLeft: "4em",
    alignSelf: "stretch",
    textDecoration: 'none',
    paddingTop: '17px',
    textAlign: 'center'
  },
  mobileMenu: {
    textDecoration: 'none',
  },
  active:{
    fontWeight: "bold",
    borderBottom: "solid 3px #20B2AA",
  },
  anchorOriginAttr:{
    vertical: "top",
    horizontal: "right",
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

