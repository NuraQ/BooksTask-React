import { Typography } from '@material-ui/core';
import {useLogoStyle} from './HomeLogo.style'

export const HomeLogo = () => {
    const {mainHeader} = useLogoStyle();
    return (
        <Typography className={mainHeader} variant="h3" component="h2" >
            Book Store
        </Typography>
    )
}