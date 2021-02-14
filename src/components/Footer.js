import React from "react";
import Grid from "@material-ui/core/Grid";

import ContactButtons from "./ContactButtons";

const Welcome = () => {
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      direction="column"
      spacing={5}
    >
      <Grid item>
        <ContactButtons />
      </Grid>
    </Grid>
  );
};
export default Welcome;
