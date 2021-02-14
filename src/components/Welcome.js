import React from "react";
import { withStyles, useTheme, withTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import ContactButtons from "./ContactButtons";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Page from "./Page";
import NextFab from "./NextFab";
import Zoom from "@material-ui/core/Zoom";
const ProfilePic = ({ small }) => {
  const theme = useTheme();

  const transitionDuration = {
    enter: theme.transitions.duration.shortest,
    exit: theme.transitions.duration.shortest,
  };
  return (
    <Zoom
      in={true}
      timeout={transitionDuration}
      style={{
        transitionDelay: `${transitionDuration.exit}ms`,
      }}
      unmountOnExit
    >
      <img
        src="/menow.jpeg"
        width={small ? 60 : 150}
        height={small ? 60 : 150}
        style={{ objectFit: "cover", borderRadius: 10 }}
      />
    </Zoom>
  );
};

const Description = withTheme(
  withStyles((theme) => {
    return {
      logoColorText: {
        color: "#D30000",
      },
      primaryColorText: {
        color: theme.palette.primary.main,
      },
    };
  })(({ classes }) => {
    return (
      <Typography variant="body1">
        Extending React Native to console, desktop and TV as a{" "}
        <span className={classes.primaryColorText}>Software Developer</span>
        &nbsp;at&nbsp;
        <span className={classes.logoColorText}>You.iTV</span>! I like to apps
        for my everyday use. In my spare time, if I am not playing games, I am
        probably watching other people play games
      </Typography>
    );
  })
);
const Welcome = React.forwardRef(({ aboutRef }, ref) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Page id="welcome" ref={ref}>
      <Grid container direction="column" alignItems="center" wrap="noWrap">
        <Grid item>
          <Grid
            container
            direction="row"
            wrap="nowrap"
            alignItems={"center"}
            spacing={3}
          >
            <Hidden smDown>
              <Grid item direction={"column"}>
                <ProfilePic />
              </Grid>
            </Hidden>
            <Grid item direction={"column"}>
              <Grid
                container
                alignItems="center"
                spacing={matches ? 0 : 1}
                wrap="nowrap"
              >
                <Grid item>
                  <Hidden mdUp>
                    <ProfilePic small />
                  </Hidden>
                </Grid>
                <Grid item>
                  <Typography variant="h2">Maya Saringan</Typography>
                </Grid>
              </Grid>
              <Description />
              <ContactButtons />
            </Grid>
          </Grid>
        </Grid>
        <NextFab targetID="about" aboutRef={aboutRef} />
      </Grid>
    </Page>
  );
});
Welcome.displayName = "Welcome";
export default Welcome;
