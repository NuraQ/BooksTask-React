import { makeStyles } from "@material-ui/core/styles";
import Image from "../../images/img.jpg";
export const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
      display: 'flex',
      flexDirection:'column',
      backColor: 'red',

    },
    image: {
      backgroundImage:` url(${Image})`,
      backgroundRepeat: "no-repeat",
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
      backgroundSize: "cover",
      backgroundPosition: "center",

 
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", 
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor:'#00948D',
      padding: 15,
      fontSize: 15,
      fontWeight: 500,
  
    },
    movePanel:{
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 'auto',
        transition: `all 2s`,
    }
  }));