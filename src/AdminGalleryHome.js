import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import AdminGallery from './AdminGallery';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
}));

export default function AdminGalleryHome() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AdminGallery/>
    </div>
  )

}