import { makeStyles } from "@material-ui/core/styles";
export const useCreditStyle = makeStyles((theme) => ({
    loaderStyle:{
        display:'flex',
        margin: 'auto',
        justifyContent:'center'
    },
    buttonStyle: {
        color: theme.palette.primary.main,
        variant: "outlined", 
    }
}));
