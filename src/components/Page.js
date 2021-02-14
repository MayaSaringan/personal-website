import React from "react";
import { withStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
const Page = React.forwardRef(
  ({ classes, children, id, fadeIn = true, fadeOut = true }, ref) => {
    const theme = useTheme();
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
      scrollHandler();

      window.addEventListener("scroll", scrollHandler);

      return () => window.removeEventListener("scroll", scrollHandler);
    }, [ref]);

    const scrollHandler = () => {
      if (ref) {
        let isVisible = false;
        if (
          fadeIn &&
          window.pageYOffset +
            window.innerHeight -
            ref.current.offsetHeight / 3 >
            ref.current.offsetTop
        ) {
          isVisible = true;
        }
        if (
          fadeOut &&
          window.pageYOffset +
            window.innerHeight -
            (2 * ref.current.offsetHeight) / 3 >=
            ref.current.offsetTop + ref.current.offsetHeight
        ) {
          isVisible = false;
        }
        setVisible(isVisible);
      }
    };
    return (
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.root}
        wrap="noWrap"
        spacing={3}
        id={id}
        ref={ref}
      >
        <Fade
          in={visible}
          timeout={{
            enter: theme.transitions.duration.complex,
            exit: theme.transitions.duration.complex,
          }}
        >
          <Grid item>{children}</Grid>
        </Fade>
      </Grid>
    );
  }
);
Page.displayName = "Page";
export default withStyles({
  root: {
    minHeight: "100vh",
    paddingTop: 20,
    paddingBottom: 20,
  },
})(Page);
