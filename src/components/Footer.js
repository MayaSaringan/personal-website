import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import ContactButtons from "./ContactButtons";

const Welcome = () => {
  return (
    <Container>
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
    </Container>
  );
};
export default Welcome;
