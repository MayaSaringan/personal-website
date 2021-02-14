import React from 'react';
import clsx from 'clsx'; 
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PageItems from './PageItems'
import { makeStyles, withStyles, withTheme } from "@material-ui/core/styles"; 

const  TemporaryDrawer = ({toggleDrawer, open, classes}) => { 
 const handleKeyEvent = (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }
  toggleDrawer && toggleDrawer(false)
 }
  return (
      <Drawer anchor={"left"} open={open} onClose={() => toggleDrawer && toggleDrawer( false)}>
        <div
          className={ classes.list}
          role="presentation"
          onClick={() => toggleDrawer && toggleDrawer( false)}
          onKeyDown={handleKeyEvent}
        >
          <PageItems direction="column"  onKeyDown={handleKeyEvent}/>
        </div>
      </Drawer>
  );
}

export default withStyles({
  list:{
    width:250
  }
})(TemporaryDrawer)