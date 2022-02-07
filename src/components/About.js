import React from "react";
import { withTheme, withStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "./Link";
import Page from "./Page";
const ResumeButton = withTheme(
  withStyles((theme) => {
    return {
      resumeButton: {
        background: "inherit",
        borderRadius: 60,
        borderColor: "#466989",
        "&:hover": {
          //  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          background: theme.palette.secondary.main,
          borderColor: "transparent",
        },
        "&:focus": {
          outline: "none",
          background: theme.palette.secondary.main,
        },
      },
      resumeIcon: {
        width: theme.typography.pxToRem(30),
        height: theme.typography.pxToRem(30),
      },
    };
  })(({ classes }) => {
    return (
      <Link link="./MayaSaringan.pdf">
        <Button
          variant="outlined"
          className={classes.resumeButton}
          startIcon={
            <img
              src="https://img.icons8.com/officel/80/000000/open-resume.png"
              className={classes.resumeIcon}
            />
          }
        >
          RESUME
        </Button>
      </Link>
    );
  })
);
const About = React.forwardRef(({ classes }, ref) => {
  const theme = useTheme();
  return (
    <Page id="about" ref={ref}>
      <Grid container direction="column" wrap="noWrap">
        <Grid item>
          <Grid container alignItems="center">
            <Grid item>
              <img
                src="https://img.icons8.com/bubbles/100/000000/girl-with-chemical-test-tube.png"
                style={{
                  width: theme.typography.pxToRem(60),
                  height: theme.typography.pxToRem(60),
                }}
              />
            </Grid>
            <Grid item>
              <Typography variant="h3">ABOUT</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Card variant="outlined">
            <Grid container direction="column" spacing={3} wrap="noWrap">
              <Grid item>
                <Typography variant="body1" className={classes.text}>
                  {`I have extensive experience with the React Native Framework from my contributions in extending platform support at WarnerMedia, You.i TV. ` +
                    `I have also contributed to React Native packages privately distributed to company clients. ` +
                    `I am most proficient in C++ and Typescript development, but I also have experience in Swift and Objective-C from work. ` +
                    `For my side projects, I typically develop in React Native Web / React, utilizing Firebase as the backend because of how quickly I can setup entire applications for any random idea I want to try my hand at.`}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" className={classes.text}>
                  {`Graduated in 2019 Bachelor's Degree in Computer Science Honours from Carleton University with High Distinction.`}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.text}>
                  {`My favorite things: One Piece, Rimworld, Genshin Impact`}
                </Typography>
              </Grid>
              <Grid item>
                <Grid item>
                  <ResumeButton />
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Page>
  );
});
About.displayName = "About";
export default withStyles({
  text: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
})(About);
