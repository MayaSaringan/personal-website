import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Switch from "@material-ui/core/Switch";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import withWidth from "@material-ui/core/withWidth";
import { makeStyles, withStyles, withTheme } from "@material-ui/core/styles";
import ThemeContext from "../theme/Theme";
import LightModeIcon from "./lightModeIcon";

import ElevationScroll from "./ElevationScroll";
import NavbarItem from "./NavbarItem"; 
import HideableItems from "./HideableItems"


const Burger = ({onPress}) =>{
  return (
    <Hidden smUp>
      <IconButton edge="start"  color="inherit" aria-label="menu" onClick={()=>{
        onPress && onPress(true)
      }}>
        <MenuIcon />
      </IconButton>
    </Hidden>
  )
}

export default Burger;