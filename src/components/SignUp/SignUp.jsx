import React, { useState, useRef } from "react";
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
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useStyles } from "./SignUp.style";
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



export default function SignUp() {

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const signInPannel= useRef()
  const classes = useStyles();
  const handleEmailChange = (event) =>{
    setCredentials({...credentials, email: event.target.value })
  }
  const handlePasswordChange = (event) => {
    setCredentials({...credentials, password: event.target.value })
  }
  const submit = ()=>{
    let loggedUser = localStorage.getItem('loggedUser');
    let user = JSON.parse(loggedUser);
    if (user.email === credentials.email && user.password === credentials.password){

    }
  }
  const displaySignUp = ()=>{
    signInPannel.current.classList.add(classes.movePanel);
  }

  return (

      <Grid container component="main">
        <CssBaseline />
        <Grid item sm={6} component={Paper} className={classes.login} elevation={6} square  >
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
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={submit}
              >
                Sign UP
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
      </Grid>
  );
}
