import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Switch from "@material-ui/core/Switch";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import withWidth from "@material-ui/core/withWidth";
import { makeStyles, withStyles, withTheme } from "@material-ui/core/styles";
import ThemeContext from "../theme/Theme";
import LightModeIcon from "./lightModeIcon";

import ElevationScroll from "./ElevationScroll";
import NavbarItem from "./NavbarItem";
import HideableItems from "./HideableItems";
import Burger from "./Burger";
import Drawer from "./Drawer";
const Navbar = ({ classes, width }: any) => {
  const { light, switchTheme } = useContext(ThemeContext);
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (open) => setOpen(open);
  return (
    <div className={classes.root}>
      <ElevationScroll>
        <AppBar elevation={4} color={"inherit"} className={classes.body}>
          <Container>
            <Toolbar>
              <Grid container alignItems="center">
                <Burger onPress={toggleDrawer} />
                <Drawer toggleDrawer={toggleDrawer} open={open} />
                <Grid item>
                  <NavbarItem
                    title=""
                    imgSrc={"/emoji.png"}
                    link="welcome"
                    scrolling
                    iconStyle={{ width: 40, height: 40 }}
                    iconBgStyle={{ width: 50, height: 50 }}
                  />
                </Grid>
                <HideableItems />
                <Grid
                  item
                  {...(["xs", "sm"].includes(width)
                    ? { className: classes.end }
                    : {})}
                >
                  <Grid container alignItems="center" justify="flex-end">
                    <Switch
                      checked={light}
                      icon={<LightModeIcon />}
                      checkedIcon={<LightModeIcon light />}
                      onChange={switchTheme}
                      color="primary"
                      name="lightSwitch"
                      inputProps={{ "aria-label": "light mode" }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    </div>
  );
};
export default withTheme(
  withStyles((theme) => {
    return {
      root: {
        width: "100%",
      },
      body: {
        display: "flex",
        justifyContent: "center",
      },
      end: {
        flexGrow: 1,
      },
    };
  })(withWidth()(Navbar))
);
