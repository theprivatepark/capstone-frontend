import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import MainListItems from './ListItems';
import AdminGalleryHome from './AdminGalleryHome';
import { Switch, Route } from 'react-router-dom';
import ClientHome from './ClientHome';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    backgroundColor: '#EDEDEA',
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

export default function AdminMainContainer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper),
        }}>
        <List><MainListItems/></List>
      </Drawer>

      <Switch>
        <Route exact path="/admin/clienthome" component={ClientHome} />
        <Route exact path="/admin/galleryhome" component={AdminGalleryHome} />
      </Switch>
    </div>
  );
}