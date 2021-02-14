import React from "react";
import { withStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
const Welcome = withStyles({
  img: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
})(({ classes, title, src, iconSize }) => {
  const theme = useTheme();
  return (
    <Grid container alignItems="center">
      <Grid item>
        <img
          src={src}
          className={classes.img}
          style={{
            width: iconSize ? theme.typography.pxToRem(iconSize) : null,
            height: theme.typography.pxToRem(iconSize) ? iconSize : null,
          }}
        />
      </Grid>
      <Grid item>
        <Typography variant="h3">{title}</Typography>
      </Grid>
    </Grid>
  );
});
export default Welcome;
