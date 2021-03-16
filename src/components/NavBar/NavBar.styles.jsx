import { makeStyles, fade } from "@material-ui/core";

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
      marginLeft: '0.7em'
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
      fontSize: "0.9em",

    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: "2em",

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
  search: {    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    border: 'solid 1px 	#DCDCDC ',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 'auto',
    height:'35px',
    alignSelf: 'center',

  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',

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

