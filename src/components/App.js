import React, { useContext, useState } from "react";
import {
  ThemeProvider,
  makeStyles,
  withStyles,
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import About from "./About";
import Work from "./Work";
import Projects from "./Projects";
import Footer from "./Footer";
import ThemeContext, { lightTheme, darkTheme } from "./theme/Theme";

const App = withStyles({
  root: {
    width: "100%",
    minHeight: "100vh",
  },
  body: {
    backgroundColor: "inherit",
    width: "100%",
    margin: 10,
  },
})(({ classes }) => {
  const { light } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={light ? lightTheme : darkTheme}>
      <Paper className={classes.root}>
        <Navbar />
        <Container maxWidth={"md"}>
          <Grid alignItems="center" flexDirection="column">
            <Welcome />
            <About />
            <Work />
            <Projects />
            <Footer />
          </Grid>
        </Container>
      </Paper>
    </ThemeProvider>
  );
});

const Wrapper = () => {
  const [light, setLight] = useState(false);
  const switchTheme = () => setLight(!light);
  return (
    <ThemeContext.Provider value={{ light, switchTheme }}>
      <App />
    </ThemeContext.Provider>
  );
};
export default Wrapper;
