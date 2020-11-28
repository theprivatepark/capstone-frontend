import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function CreateSessionForm(props) {
  const classes = useStyles();
  const status = ["consultation", "photo session", "editing", "complete"]
  const [statusPick, setStatusPick] = useState(null)


  const handleStatusChange = (event) => {
    setStatusPick(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    console.log(e.target[1].value)
    const status = e.target[1].value
    const eventName = e.target[2].value // event name
    const locationName = e.target[3].value // location name
    const locationAddress = e.target[4].value //address
    const date = e.target[5].value //date
    const time = e.target[6].value //time

    let event = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: props.client.id,
        event_name: eventName,
        location_name: locationName,
        location_address: locationAddress,
        date: date,
        time: time,
        status: status

      })
    }
    fetch("http://localhost:3001/events", event)
  }


  return (
    <form className={classes.root} noValidate onSubmit={(e) => { handleSubmit(e) }}>
      <div>
        <TextField
          id="standard-select-currency"
          label="Client Name"
          value={props.client.first_name + " " + props.client.last_name}
        >
        </TextField>
        <br></br>
        <TextField
          id="standard-select-currency"
          select
          label="Status"
          value={statusPick}
          onChange={handleStatusChange}
        >
          {status.map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </TextField>
        <br></br>
        <TextField
          id="standard-helperText"
          label="Event Name"
          defaultValue=" "
        />
        <br></br>
        <TextField
          id="standard-helperText"
          label="Location Name"
          defaultValue=" "
        />
        <br></br>
        <TextField
          id="standard-helperText"
          label="Location Address"
          defaultValue=" "
        />
        <br></br>
        <TextField
          id="date"
          label="Event Date"
          type="date"
          defaultValue="2020-12-03"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br></br>
        <TextField
          id="time"
          label="Event Time"
          type="time"
          defaultValue="XX:XX"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <br></br>

        <input
          accept="image/png, image/jpeg"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          name="image"
        />

        <br></br>
        <br></br>
        <Button
          type="submit"
          fullWidth
          variant="contained"
        >
          Create Session
        </Button>
        <br></br>
        <br></br>
      </div>
    </form>
  );
}
