import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import MapIcon from '@material-ui/icons/Map';
import { Link } from 'react-router-dom';



export const mainListItems = (
  <div>
    <Link to="/admin/galleryhome">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Gallery Home" />
      </ListItem>
    </Link>

    <Link to="/admin/clienthome">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Client Home" />
      </ListItem>
    </Link>

    <ListItem button>
      <ListItemIcon>
        <MapIcon />
      </ListItemIcon>
      <ListItemText primary="View Map" />
    </ListItem>
  </div>
);