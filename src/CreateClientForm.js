import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';

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
    backgroundColor: 'red'
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

export default function UserMainContainer() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const { register, handleSubmit } = useForm()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container} >
          <Paper className={fixedHeightPaper} elevation={6} >
            <form className={classes.form} noValidate onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>

              <TextField
                inputRef={register}
                variant="outlined"
                required
                fullWidth
                margin="normal"
                name="name"
                label="Client's First Name"
                type="name"
                id="standard-basic"
                autoComplete="name"
              />
              <TextField
                inputRef={register}
                variant="outlined"
                required
                fullWidth
                margin="normal"
                name="name"
                label="Client's Last Name"
                type="name"
                id="standard-basic"
                autoComplete="name"
              />
              <TextField
                inputRef={register}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Client's email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                inputRef={register}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Generate Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained">
                Create Client
                </Button>
            </form>
          </Paper>
        </Container>
      </main>
    </div>
  );
}