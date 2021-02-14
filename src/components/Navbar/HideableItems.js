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
import PageItems from './PageItems'
const HideableItems = withWidth()(({ classes, width, direction='row'}) => { 
  const [shrink, setShrink] = React.useState(false); 
  React.useEffect(()=>{
    setShrink(width == "sm")
  },[width])
  return (
    <Hidden xsDown>
      <Grid item className={classes.main}  >
        <Grid
        direction={direction}
          container
          alignItems="center"
          justify={shrink ? "left" : "space-around"}
        >
          <PageItems/>
        </Grid>
      </Grid>
    </Hidden>
  );
});

export default withStyles({
  
  main: {
    display: "flex",
    flexGrow: 2,
  },
})(HideableItems)