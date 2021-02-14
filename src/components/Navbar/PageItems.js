import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";

import withWidth from "@material-ui/core/withWidth";
import { withStyles } from "@material-ui/core/styles";
import NavbarItem from "./NavbarItem";
const HideableItems = withWidth()(
  ({ classes, width, direction = "row", onKeyDown }) => {
    const [shrink, setShrink] = React.useState(false);
    React.useEffect(() => {
      setShrink(width == "sm");
    }, [width]);
    return (
      <>
        <Grid item>
          <NavbarItem
            title="work"
            imgSrc={
              !shrink
                ? "https://img.icons8.com/doodle/96/000000/home-office.png"
                : null
            }
            link="work"
            scrolling
            onClick={onKeyDown}
          />
        </Grid>
        <Grid item>
          <NavbarItem
            title="projects"
            imgSrc={
              !shrink
                ? "https://img.icons8.com/dusk/64/000000/innovation.png"
                : null
            }
            link="projects"
            scrolling
            onClick={onKeyDown}
          />
        </Grid>
        <Grid item>
          <NavbarItem
            title="resume"
            imgSrc={
              !shrink
                ? "https://img.icons8.com/officel/80/000000/open-resume.png"
                : null
            }
            link="./MayaSaringan.pdf"
            onClick={onKeyDown}
          />
        </Grid>
      </>
    );
  }
);

export default withStyles({
  main: {
    display: "flex",
    flexGrow: 2,
  },
})(HideableItems);
