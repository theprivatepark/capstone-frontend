import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CreateClientForm from './CreateClientForm';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import ClientList from './ClientList';

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

export default function ClientHome() {
  const classes = useStyles();
  const [showForm, setShowForm] = useState(false)
  const [listVisibility, setListVisibility] = useState(false)
  

  return (
    <div className={classes.root}>
      <CssBaseline />
      {!listVisibility ? <ClientList /> : null}
      

      {!showForm ? <div className={classes.content}>
        <Button variant="contained" onClick={() => {
                                        setShowForm(!showForm)
                                        setListVisibility(!listVisibility)
                                      }
                                      
                                        }>Add New Client</Button>
        <div className={classes.appBarSpacer} />
      </div>
        :
        <CreateClientForm />}
    </div>
  )

}