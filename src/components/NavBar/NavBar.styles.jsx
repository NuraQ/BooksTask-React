import { makeStyles, fade } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "white",

  },
  logoStyle: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#808080",
    textAlign: "left",
    marginLeft: "50px",
    width: "200px",
  },
  menuButton: {
    [theme.breakpoints.down('xs')]: {
      display:'none'
    },
  
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 400,
    size: "18px",
    color: "#808080",
    marginLeft: "45px",
    alignSelf: "stretch",
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
    // [theme.breakpoints.up('xl')]: {
    //   marginLeft: theme.spacing(3),
    //   width: 'auto',
    // },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
  inputRoot: {
    color: 'black',
  },
  inputInput: {
    // padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },
  },
  menuIcon: {
    [theme.breakpoints.up('xs')]: {
      display:'none'
    },
    [theme.breakpoints.down('xs')]: {
      display:'block'
    },
    padding: theme.spacing(0, 2),
    color: 'black'

  }
}));

