import React from "react";
import {useDispatch} from 'react-redux'
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {ClearCurrentUser} from '../Login/LoginDispatcher';

const LogOutPopup = () => {
  const [open, setOpen] = React.useState(true);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    localStorage.removeItem('loggedUser') 
    ClearCurrentUser()(dispatch)   
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">SIGN OUT</DialogTitle>
      <DialogContent>
        <DialogContentText>
          are you sure you would like to sign out?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleLogOut}>Sign Out</Button>
      </DialogActions>
    </Dialog>
  );
};
export default LogOutPopup;