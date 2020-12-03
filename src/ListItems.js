import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import MapIcon from '@material-ui/icons/Map';
import RoomIcon from '@material-ui/icons/Room';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: "black"
  }
}));


export default function MainListItems() {
  const classes = useStyles();
  const history = useHistory()


  const handleGallery = () => {
    history.push('/admin/galleryhome')
  }

  const handleHome = () => {
    history.push('/admin/clienthome')
  }

  const handleMap = () => {
    history.push('/admin/map')
  }

  const handleWeather= () => {
    history.push('/admin/weather')
  }

  return (
    <div>

        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Gallery Home" onClick={handleGallery}/>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Client Home" onClick={handleHome}/>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary="View Map" onClick={handleMap}/>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <RoomIcon />
          </ListItemIcon>
          <ListItemText primary="View Weather" onClick={handleWeather}/>
        </ListItem>

    </div>
  )
};