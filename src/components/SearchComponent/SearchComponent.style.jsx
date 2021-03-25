import { makeStyles, fade } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    border: "solid 1px 	#DCDCDC ",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: "2.0em",
    },
    marginRight: theme.spacing(2),
    marginLeft: "auto",
    height: "35px",
    alignSelf: "center",
     [theme.breakpoints.down("md")]: {
      marginLeft: "20px",
    },

  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  },
  inputRoot: {
    color: "black",
  },
  inputInput: {
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
}));
