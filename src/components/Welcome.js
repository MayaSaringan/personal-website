import React, { useEffect, useState } from "react";
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import ContactButtons from "./ContactButtons";
const themeInstance = createMuiTheme({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});
const ProfilePic = ({small}) => {
  return (
        <img
          src="/menow.jpeg"
          width={ small ? 60 : 150}
          height={ small ? 60 : 150}
          style={{ objectFit: "cover", borderRadius: 10 }}
        /> 
  )
}
const Welcome = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    minHeight: "100vh",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  },
  title: {
    fontSize: "1em",
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
  },
})(({ classes }) => {
  return (
    <Box className={classes.root} id="welcome">
      <Box className={classes.body}>
        <Grid
          container
          direction="row"
          wrap="nowrap" 
          alignItems={"center"}
          spacing={3}
        >
          
          
          <Hidden  smDown>
        < Grid item direction={"column"} >
              <ProfilePic/>
          </Grid>
          
          </Hidden>
          <Grid item direction={"column"}>
            <Grid container alignItems="center" spacing={2}
          wrap="wrap" >
              < Grid item >
                <Hidden  mdUp>
                  <ProfilePic small/>
                </Hidden>
              </Grid>
              <Grid item>
                <Typography className={classes.title}>Maya Saringan</Typography>
              </Grid>
            </Grid>
            <Typography className={classes.text}>
              Extending React Native to console, desktop and TV as a{" "}
              <span style={{ color: "#04B877" }}>Software Developer</span>
              &nbsp;at&nbsp;
              <span style={{ color: "#D30000" }}>You.iTV</span>! I like to make
              apps for my everyday use. In my spare time, if I am not playing
              games, I am probably watching other people play games 😁
            </Typography>
            <ContactButtons />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
});
export default Welcome;
