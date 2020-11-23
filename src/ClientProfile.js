import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 375,
  },
});

export default function ClientProfile(props) {
  console.log(props)
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardContent>
       
        <Typography variant="h5" component="h2">
         {props.clickedClient.first_name + " " + props.clickedClient.last_name}
        </Typography>
   
        <Typography variant="body2" component="p">
          Name: {props.clickedClient.first_name + " " + props.clickedClient.last_name}
          <br />
          Email Address: {props.clickedClient.email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Sessions</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
}
