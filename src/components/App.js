import React, { useContext, useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar, { NavbarContext } from "./Navbar";
import Welcome from "./Welcome";
import About from "./About";
import Work from "./Work";
import Projects from "./Projects";
import Footer from "./Footer";
import ThemeContext, { lightTheme, darkTheme } from "./theme/Theme";
import CircularProgress from "@material-ui/core/CircularProgress";
import Page from "./Page";

const App = () => {
  const { light } = useContext(ThemeContext);
  const [doneLoading, setDoneLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDoneLoading(!doneLoading);
    }, 500);
  }, []);
  return (
    <ThemeProvider theme={light ? lightTheme : darkTheme}>
      {doneLoading ? <Loaded /> : <Loading />}
    </ThemeProvider>
  );
};
const Loaded = () => {
  const welcomeRef = React.createRef();
  const aboutRef = React.createRef();
  const projectsRef = React.createRef();
  const workRef = React.createRef();
  const [appbarHeight, setAppbarHeight] = useState(null);
  return (
    <Paper>
      <NavbarContext.Provider value={{ appbarHeight, setAppbarHeight }}>
        <Navbar />
        <Container maxWidth={"md"}>
          <Grid alignItems="center" flexDirection="column">
            <CssBaseline>
              <Welcome aboutRef={aboutRef} ref={welcomeRef} />
              <About ref={aboutRef} />
              <Work ref={workRef} />
              <Projects ref={projectsRef} />
              <Footer />
            </CssBaseline>
          </Grid>
        </Container>
      </NavbarContext.Provider>
    </Paper>
  );
};
const CircularIndeterminate = () => {
  const loadingRef = React.createRef();
  return (
    <Page fadeIn fadeOut={false} ref={loadingRef}>
      <CircularProgress color="secondary" />
    </Page>
  );
};
const Loading = () => {
  return <CircularIndeterminate />;
};

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
