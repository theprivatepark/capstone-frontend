import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { mainListItems } from './ListItems';
import Button from '@material-ui/core/Button';
import CreateClientForm from './CreateClientForm';


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
}));

export default function UserMainContainer() {
  const classes = useStyles();
  const [showForm, setShowForm] = useState(false)

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper),
        }}>
        <List>{mainListItems}</List>
      </Drawer>

      {!showForm ? <div className={classes.content}>
        <Button variant="contained" onClick={() => setShowForm(!showForm)}>Add New Client Form</Button>
        <div className={classes.appBarSpacer} />
      </div> 
      :
      <CreateClientForm/>} 

    </div>
  );
}