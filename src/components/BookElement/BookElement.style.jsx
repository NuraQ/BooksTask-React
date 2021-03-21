import { makeStyles } from "@material-ui/core/styles";

export const useBookStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "170px",
    marginLeft: "70px",
    marginRight: "70px",
  },
  media: {
    height: 140,
    display: "block",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
  },
  elementRoot: {
    maxWidth: 345,
  },
  cardContent: {
    height: "100px",
    display: 'flex',
    flexDirection: 'column'
  },

  textWrapper: {
    display: "flex",
    fontSize:'5px'
  },
  typoFont: {
    fontSize: 17,
    [theme.breakpoints.down('md')]: {
      fontSize: "0.8rem",
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 17,
    },
    fontFamily: 'cursive',
  },
  
  icon: {
    marginLeft: "auto",
    alignSelf: "start",
  },

  timePublished: {
    marginTop: "auto",
    alignSelf: "start",
    color: "textSecondary",  
  },
}));
