import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {  useHistory } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontFamily: 'Crimson Text, serif',
  },
  sign: {
    fontFamily: 'Crimson Text, serif'
  },
  link: {
    textDecoration: 'none'
  }
}));

export default function Login(props) {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault()

    let user = {
      email: email,
      password: password
    }

    fetch('http://localhost:3001/login', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => {
      console.log(data)
        if (data.errors) {
          alert(data.info)
        }
        else {
          // props.setCurrentUser(data.info)
          console.log(data.info)
          history.push('/admin/weather')
        }
      })
  };


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.sign}>
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleEmailChange}
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}>
            Sign In
          </Button>


        </form>
      </div>

      <Box mt={8}>
      </Box>
    </Container>
  );
}