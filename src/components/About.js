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
                  {`I'm most proficient in C++ and JavaScript, and am experienced in contributing to large codebases. ` +
                    `For personal projects, I tend to develop in ReactJS or React Native. `}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" className={classes.text}>
                  {`I graduated with a 2019 B.C.S Honours from Carleton University`}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.text}>
                  {` I have 12000+ hours in RuneScape3, but my favourite game is Rimworld`}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.text}>
                  {`My favourite anime is Attack on Titan. My favourite TV series is Attack on Titan. My favourite anime character is L from Death Note. My favourite non-anime character is Sansa from Game of Thrones.`}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.text}>
                  {`First generation immigrant from the `}
                  <span>&nbsp;</span>
                  <img
                    src="https://img.icons8.com/emoji/96/000000/philippines-emoji.png"
                    width={30}
                    height={30}
                  />
                  {`Philippines.`}
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
