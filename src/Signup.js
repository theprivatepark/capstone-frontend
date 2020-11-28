import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 440,
    width: 440,
  },
}));

export default function Signup(props) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  // let history = useHistory();

  const handleSubmit = (e) => {

    const firstName = e.target[0].value
    const lastName = e.target[1].value
    const password = e.target[2].value
    const email = e.target[3].value
    let client = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        password: password,
        email: email
      })
    }
    fetch("http://localhost:3001/clients", client )  //{ withCredentials: true }
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container} >
          <Paper className={fixedHeightPaper} elevation={6} >
            <form className={classes.form} noValidate onSubmit={(e) => { handleSubmit(e) }}>
              <TextField
                required
                fullWidth
                margin="normal"
                name="first_name"
                label="First Name"
                type="first_name"
                id="first_name"
              />
              <TextField
                required
                fullWidth
                margin="normal"
                name="last_name"
                label="Last Name"
                type="last_name"
                id="last_name"
              />
              <TextField
                required
                fullWidth
                margin="normal"
                name="password"
                label="Password"
                type="password"
                id="password"
              />
              <TextField
                required
                fullWidth
                margin="normal"
                name="email"
                label="Email"
                type="email"
                id="email"
              />
      
              <Button
                type="submit"
                fullWidth
                variant="contained"
                >
                Create Client
                </Button>
            </form>
          </Paper>
        </Container>
      </main>
    </div>
  );
}