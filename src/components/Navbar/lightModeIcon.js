import React from "react";
import Grid from "@material-ui/core/Grid";

import { withStyles, withTheme } from "@material-ui/core/styles";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const Icon = ({ classes, light }: any) => {
  const Icon = light ? Brightness4Icon : Brightness2Icon;
  return (
    <Grid
      container
      className={classes.root}
      alignItems="center"
      justify="center"
    >
      <Icon className={classes.icon} fontSize="small" />
    </Grid>
  );
};
export default withTheme(
  withStyles((theme) => {
    return {
      root: {
        width: 20,
        height: 20,
        borderRadius: 100,
        backgroundColor: theme.palette.secondary.main,
      },
      icon: {
        fontSize: 14,
        color: theme.palette.type == "dark" ? "white" : "yellow",
      },
    };
  })(Icon)
);
