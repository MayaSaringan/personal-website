import React from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import withWidth from "@material-ui/core/withWidth";
import { withStyles } from "@material-ui/core/styles";
import PageItems from "./PageItems";
const HideableItems = withWidth()(({ classes, width, direction = "row" }) => {
  const [shrink, setShrink] = React.useState(false);
  React.useEffect(() => {
    setShrink(width == "sm");
  }, [width]);
  return (
    <Hidden xsDown>
      <Grid item className={classes.main}>
        <Grid
          direction={direction}
          container
          alignItems="center"
          justify={shrink ? "left" : "space-around"}
        >
          <PageItems />
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
})(HideableItems);
