import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  header: {
    backgroundColor: "transparent",
    color: "black",
    boxShadow: "0px 0px 0px 0px",
    borderBottom: '0.1em solid grey', padding: '0.5em'

  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Anney Park Photography
          </Typography>
          <Link to ="/"><Button color="inherit">Home</Button></Link>
          <Link to ="/gallery"><Button color="inherit">Gallery</Button></Link>
          <Link to ="/contact"><Button color="inherit">Contact</Button></Link>
          <Button color="inherit">About</Button>
          <Link to ='/login'><Button color="inherit">Client Login</Button></Link>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
