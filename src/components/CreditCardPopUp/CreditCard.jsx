import React  from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { CircularProgress } from "@material-ui/core";
import {useLoaderStyle} from './loader.style';

export  const CreditCard = () =>  {
  const [open, setOpen] = React.useState(false);
  const [loader, displayLoader] = React.useState(false);
  const {loaderStyle} = useLoaderStyle()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    displayLoader(true)

   setTimeout(() => {
    displayLoader(false)
    setOpen(false);
   }, 5000);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Purchase Book
      </Button>
     <Dialog  open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
           <DialogContent>
          <DialogContentText>
            To Purchase the requested Book please enter your credit car information below:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="card id"
            fullWidth
          />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="card password"
            type="password"
            fullWidth
          />
             {loader ?   <CircularProgress className={loaderStyle} />  :  <div></div>
           
        }
        </DialogContent>
    
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    
    </div>
  );
}
