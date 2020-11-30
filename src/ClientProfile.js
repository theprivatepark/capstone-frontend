import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import {  useHistory } from "react-router-dom";





const useStyles = makeStyles({
  root: {
    minWidth: '500px',
    midHeight: '400px',
    marginLeft: '350px',
    marginTop: '200px',
    backgroundColor: '#EDEDEA',
    textAlign: 'center'
  },
  edit: {
    padding: '10px'
  },
  actions: {
    marginLeft: '95px'
  },
  button: {
    width: '150px'
  }
});

export default function ClientProfile(props) {
  const history = useHistory()
  const classes = useStyles();
  const [edit, setEdit] = useState(false)

  const handleSubmit = (e) => {
    // e.preventDefault()
    console.log(e)
    let id = props.clickedClient.id

    const firstName = e.target[0].value
    const lastName = e.target[1].value
    const email = e.target[2].value

    let client = {
      method: "PATCH",
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email
      })
    }
      fetch(`http://localhost:3001/clients/${id}`, client)
      .then(response => response.json())
      .then(console.log)
  }


  const handleDelete = (e) => {
    let id = props.clickedClient.id

      return fetch(`http://localhost:3001/clients/${id}`, {
        method: "DELETE"
      })
      .then(response => response.json())
      .then(history.go(0)
      )
  }

  return (
    <Card className={classes.root}>

      {!edit ?
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.clickedClient.first_name + " " + props.clickedClient.last_name}
          </Typography>
          <Typography variant="body2" component="p">
            First Name: {props.clickedClient.first_name}
            <br />
            Last Name: {props.clickedClient.last_name}
            <br />
          Email Address: {props.clickedClient.email}
          </Typography>
        </CardContent>
        :
        <form className={classes.edit} noValidate onSubmit={(e) => { handleSubmit(e) }}>
          <TextField
            defaultValue={props.clickedClient.first_name}
            inputProps={{ 'aria-label': 'description' }}
            label="First Name"
          />
          <br />
          <TextField
            defaultValue={props.clickedClient.last_name}
            inputProps={{ 'aria-label': 'description' }}
            label="Last Name"
          />
          <br />
          <TextField
            defaultValue={props.clickedClient.email}
            inputProps={{ 'aria-label': 'description' }}
            label="Email"
          />
          <br></br>
          <br></br>

          <Button
            type="submit"
            variant="contained"
            className={classes.button}
            size="small">
            Submit
          </Button>
        </form>
      }

      <CardActions className={classes.actions}>
        <Link to="/amyslinkedin"> <Button size="small">View Sessions</Button></Link>
        <Button size="small" onClick={() => setEdit(!edit)}>Edit</Button>
        <Button size="small" onClick={handleDelete}>Delete Client</Button>

      </CardActions>
    </Card>
  );
}
