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
    flexGrow: 1,
    fontFamily: 'Crimson Text, serif',
    color: "black",
    textDecoration: "none"

  },
  header: {
    backgroundColor: "transparent",
    color: "black",
    // boxShadow: "0px 0px 0px 0px",

  },
  link: {
    textDecoration: 'none'
  }
}));

const handleClick = () => {
  //logout functionality
}

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header} elevation={0}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Anney Park Photography
          </Typography>
          <Link to="/" className={classes.link}><Button color="inherit" className={classes.title}>Home</Button></Link>
          <Link to="/gallery" className={classes.link}><Button color="inherit" className={classes.title}>Gallery</Button></Link>
          <Link to="/contact" className={classes.link}><Button color="inherit" className={classes.title}>Contact</Button></Link>
          <Link to="/about" className={classes.link}><Button color="inherit" className={classes.title}>About</Button></Link>
          <Link to='/login' className={classes.link}><Button color="inherit" className={classes.title}>Login</Button></Link>
          {/* <Link to ='/login'><Button color="inherit" className={classes.title}>Logout</Button></Link> */}
          {
            props.loggedInStatus ?
              <Link to='/logout' onClick={handleClick}>Log Out</Link> :
              null
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}
