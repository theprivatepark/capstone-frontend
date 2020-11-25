import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import AdminGallery from './AdminGallery';
import Button from '@material-ui/core/Button';
import CreateSessionForm from './CreateSessionForm';




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
  const [view, setView] = useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      {!view ? 
      <div> 
        <AdminGallery />
      </div>
        :
        <div>
          <CreateSessionForm />
          <Button style={{ backgroundColor: "pink" }} onClick={() => { setView(!view) }}>Go Back to Gallery</Button>
        </div>
      }

    </div>
  )

}