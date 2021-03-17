import { makeStyles, } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  ({
    root: {
      flexGrow: 1,
      marginTop: '170px'
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 700,
    },
    image: {
      width: 300,
      height: 300,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    bookInfo: {
    },
    price:{
      fontWeight: 'bold',
      fontSize: '18px',
      marginTop: 'auto',

    }
  }),
);