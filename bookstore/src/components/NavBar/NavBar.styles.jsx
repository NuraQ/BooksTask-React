import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
  },
  logoStyle: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 400,
    size: "18px",
    marginLeft: "38px",
 },
 toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
