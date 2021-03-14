import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "170px",
    marginLeft: "70px",
    marginRight:'70px'
  },
  media: {
    height: 140,
    display: 'block',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top'
  },
  elementRoot: {
    maxWidth: 345,
  },
  cardContent: {
    height:'100px',
  },

  textWrapper: {
    display: "flex",
  },
  typoFont: {
    fontSize: 17,
  },
  icon: {
    marginLeft: 'auto',
    alignSelf: 'start',

  },

  timePublished: {
    display:'flex'
  }
  
}));
