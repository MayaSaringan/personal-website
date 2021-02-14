import React, { useContext } from "react";
import { withStyles, useTheme, withTheme } from "@material-ui/core/styles";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import Button from "@material-ui/core/Button";
import { NavbarContext } from "./Navbar";
import { scroll } from "./Link";
const Welcome = withTheme(
  withStyles((theme) => {
    return {
      fab: {
        position: "absolute",
        bottom: theme.spacing(2),
        alignSelf: "center",
      },
    };
  })(({ classes, aboutRef }) => {
    const theme = useTheme();

    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    };
    const { appbarHeight } = useContext(NavbarContext);
    return (
      <Zoom
        in={true}
        timeout={transitionDuration}
        style={{
          transitionDelay: `${transitionDuration.exit}ms`,
        }}
        unmountOnExit
      >
        <Fab
          aria-label={"scroll"}
          className={classes.fab}
          color={"secondary"}
          onClick={() => {
            scroll.scrollTo(aboutRef.current.offsetTop - appbarHeight, {
              duration: 400,
              delay: 0,
              smooth: "linear",
            });
          }}
        >
          <ArrowDownwardIcon style={{ left: -56 }} />
        </Fab>
      </Zoom>
    );
  })
);
export default Welcome;
