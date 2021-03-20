import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useStyles } from "./SignUp.style";
import { history } from "../../routes/history";

export default function SignUp() {
  const [newUser, setNewUser] = useState({
    credentials: {
      email: "",
      password: "",
    },
  });
  const classes = useStyles();
  const handleEmailChange = (event) => {
    setNewUser({
      ...newUser,
      credentials: {
        ...newUser.credentials,
        email: event.target.value,
      },
    });
  };
  const handlePasswordChange = (event) => {
    // setCredentials({ ...credentials, password: event.target.value });
    setNewUser({
      ...newUser,
      credentials: {
        ...newUser.credentials,
        password: event.target.value,
      },
    });
  };
  const submit = () => {
    var users = localStorage.getItem("users");
    users = users ? JSON.parse(users) : [];
    users.push(newUser);
    localStorage.setItem('users',JSON.stringify(users));
    alert('successfully signed up !!!');
    
  };

  return (
    <Grid container className={classes.root} component="main">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign UP
        </Typography>
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
      </div>
    </Grid>
  );
}
