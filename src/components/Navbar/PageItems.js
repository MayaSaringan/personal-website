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
const HideableItems = withWidth()(({ classes, width, direction='row', onKeyDown}) => { 
  const [shrink, setShrink] = React.useState(false); 
  React.useEffect(()=>{
    setShrink(width == "sm")
  },[width])
  return(
    <>
          <Grid item>
            <NavbarItem
              title="work"
              imgSrc={
                !shrink
                  ? "https://img.icons8.com/doodle/96/000000/home-office.png"
                  : null
              }
              link="work"
              scrolling
              onClick={onKeyDown}
            />
          </Grid>
          <Grid item>
            <NavbarItem
              title="projects"
              imgSrc={
                !shrink
                  ? "https://img.icons8.com/dusk/64/000000/innovation.png"
                  : null
              }
              link="projects"
              scrolling
              onClick={onKeyDown}
            />
          </Grid>
          <Grid item>
            <NavbarItem
              title="resume"
              imgSrc={
                !shrink
                  ? "https://img.icons8.com/officel/80/000000/open-resume.png"
                  : null
              }
              link="./Resume.pdf"
              onClick={onKeyDown}
            />
          </Grid>
      </>
  );
});

export default withStyles({
  
  main: {
    display: "flex",
    flexGrow: 2,
  },
})(HideableItems)