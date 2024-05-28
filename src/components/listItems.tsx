import * as React from 'react';
import { ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { Dashboard, ShoppingCart, People, BarChart, Layers, Assignment } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
    <Link to='/dashboard' >
      <ListItemButton>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" sx={{span: {fontSize: 15}}} />
      </ListItemButton>
    </Link>
    <Link to='/dashboard/shops' >
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCart />
        </ListItemIcon>
        <ListItemText primary="Shops" sx={{span: {fontSize: 15}}} />
      </ListItemButton>
    </Link>
    <Link to='/dashboard/users' >
      <ListItemButton>
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText primary="Users" sx={{span: {fontSize: 15}}} />
      </ListItemButton>
    </Link>
    <Link to='/dashboard/hotels' >
      <ListItemButton>
        <ListItemIcon>
          <BarChart />
        </ListItemIcon>
        <ListItemText primary="Hotels" sx={{span: {fontSize: 15}}} />
      </ListItemButton>
    </Link>
    <ListItemButton>
      <ListItemIcon>
        <BarChart />
      </ListItemIcon>
      <ListItemText primary="Reports" sx={{span: {fontSize: 15}}} />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Layers />
      </ListItemIcon>
      <ListItemText primary="Integrations" sx={{span: {fontSize: 15}}} />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <Assignment />
      </ListItemIcon>
      <ListItemText primary="Current month" sx={{span: {fontSize: 15}}} />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Assignment />
      </ListItemIcon>
      <ListItemText primary="Last quarter" sx={{span: {fontSize: 15}}} />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Assignment />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" sx={{span: {fontSize: 15}}} />
    </ListItemButton>
  </React.Fragment>
);