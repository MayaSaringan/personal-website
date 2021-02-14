import React, { useEffect, useState } from "react";
import {
  ThemeProvider,
  makeStyles,
  withStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
const descriptions = [
  {
    desc: () => {
      return (
        `I like to make apps that already exist, but with all the features I want. ` +
        `I tend to develop in ReactJS or React Native, typically using an express server for the backend.`
      );
    },
  },
  {
    desc: () => {
      return (
        `I adore and love video games. I have an obscene amount of hours in games (12000+ in one game that I shall not name). ` +
        `My favourite game is Rimworld`
      );
    },
    thumbnail: `/rimworld.jpg`,
  },
  {
    desc: () =>
      `My favourite anime is Attack on Titan. My favourite TV series is Attack on Titan. My favourite anime character is L from Death Note. My favourite non-anime character is Sansa from Game of Thrones.`,
    thumbnail: `/aot2.jpg`,
  },
  {
    desc: () =>
      `2019 B.C.S Carleton University Graduate, 10.57 CGPA (CAN) / 3.7 GPA (US).`,
    thumbnail: `/aot.jpeg`,
  },
  {
    desc: function _() {
      return (
        <>
          {`First generation immigrant from the `}
          <span>&nbsp;</span>
          <img
            src="https://img.icons8.com/emoji/96/000000/philippines-emoji.png"
            width={30}
            height={30}
          />
          {`Philippines.`}
        </>
      );
    },
    thumbnail: `/aot.jpeg`,
  },
];
const themeInstance = createMuiTheme({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});
const Welcome = withStyles({
  root: {
    minHeight: "100vh",
  },
  title: {
    fontSize: 56,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    lineHeight: 2,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  descWrapper: {
    display: "flex",
    alignItems: "flex-start",
    marginTop: 10,
    width: "100%",
  },
  thumbnailWrapper: {
    overflow: "hidden",
  },
  thumbnail: {
    borderRadius: 6,
    height: 60,
    objectFit: "fill",
  },
})(({ classes }) => {
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.root}
      wrap="noWrap"
      spacing={3}
    >
      <Grid item>
        <Grid container direction="column" spacing={3} wrap="noWrap">
          <Grid item>
            <Typography className={classes.title}>About</Typography>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={3} wrap="noWrap">
              <Grid item>
                <Box className={classes.descWrapper} >
                    <Grid container spacing={2}>
                      <Grid item xs>
                        <Typography className={classes.text}>
                          {`I like to make apps that already exist, but with all the features I want. ` +
        `I tend to develop in ReactJS or React Native, typically using an express server for the backend.`}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
              </Grid>
              {descriptions.map((desc, i) => {
                return (
                  <Grid item>
                  <Box className={classes.descWrapper} key={"about-desc-" + i}>
                    <Grid container spacing={2}>
                      <Grid item xs>
                        <Typography className={classes.text}>
                          {desc.desc()}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
});
export default Welcome;
