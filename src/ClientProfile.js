import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles({
  root: {
    minWidth: 375,
  },
});

export default function ClientProfile(props) {
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
      .then(console.log)
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
        <form className={classes.root} noValidate onSubmit={(e) => { handleSubmit(e) }}>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="small">
            Submit
          </Button>
        </form>
      }

      <CardActions>
        <Button size="small">View Sessions</Button>
        <Button size="small" onClick={() => setEdit(!edit)}>Edit</Button>
        <Button size="small" onClick={handleDelete}>Delete Client</Button>

      </CardActions>
    </Card>
  );
}
