import React, { useState, useRef, useEffect } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  Dialog,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import SignUp from "../SignUp/SignUp";
import { useStyles } from "./login.style";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignInSide(props) {
  const [open, setOpen] = useState(true);
  const [isSignupActive, openSignup] = useState(false);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const signInPannel = useRef();
  const signUp = useRef();

  const classes = useStyles();
  const handleEmailChange = (event) => {
    setCredentials({ ...credentials, email: event.target.value });
  };
  const handlePasswordChange = (event) => {
    setCredentials({ ...credentials, password: event.target.value });
  };
  const submit = () => {
    var users = JSON.parse(localStorage.getItem("users"));
    users = users ? users : [];
    for (let user of users) {
      if (
        user.credentials.email == credentials.email &&
        user.credentials.password == credentials.password
      ) {
        localStorage.setItem("loggedUser", user);
        alert('logged In successfully!!')
      }
    }
  };

  const displaySignUp = () => {
    signInPannel.current.classList.add(classes.movePanel);
    setTimeout(() => {
      openSignup(true);
    }, 2000);
  };
  useEffect(() => {
    if (isSignupActive) {
      signUp.current.classList.add(classes.movePanel2);
    }
  }, [isSignupActive]);

  const handleClose = () => {
    setOpen(false);
    props.setDisplayLogin(false)
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth={true}
      maxWidth={"md"}
      className={classes.root}
    >
      <Grid className={classes.parent} container component="main">
        <CssBaseline />
        <Grid item sm={6} className={classes.image} ref={signInPannel} />
        <Grid
          item
          sm={6}
          component={Paper}
          className={classes.login}
          elevation={6}
          square
        >
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleEmailChange}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handlePasswordChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" onClick={displaySignUp} variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>

              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
        {isSignupActive ? (
          <Grid item xs={6} ref={signUp} className={classes.test}>
            <SignUp className={classes.shildTest} />{" "}
          </Grid>
        ) : (
          <div></div>
        )}
      </Grid>
    
    </Dialog>
  );
}
