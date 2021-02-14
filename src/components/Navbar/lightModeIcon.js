import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import { makeStyles, withStyles, withTheme , useTheme} from "@material-ui/core/styles";
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Brightness4Icon from '@material-ui/icons/Brightness4';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Icon = ({ classes, light}: any) => {
  const Icon = light ? Brightness4Icon: Brightness2Icon;
  return (
    <Grid container className={classes.root} alignItems="center" justify="center">
      <Icon className={classes.icon} fontSize="small"/>
    </Grid>
  );
};
export default withTheme(
  withStyles((theme) => {
    return {
      root: {
        width: 20,
        height:20,
        borderRadius:100,
        backgroundColor: theme.palette.primary.main,
      },
      icon: {
        fontSize:14,
        color: theme.palette.type == 'dark' ? 'white' : 'yellow'
      },
    };
  })(Icon)
);
