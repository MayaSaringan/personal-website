import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import MenuIcon from "@material-ui/icons/Menu";

import { makeStyles, withStyles, withTheme } from "@material-ui/core/styles";
import { ScrollLink, Link } from "../Link";
const MyButton = ({
  classes,
  title,
  imgSrc,
  link,
  scrolling,
  iconStyle,
  iconBgStyle,
  onClick,
}) => {
  const [hovered, setHovered] = useState(false);
  let LinkClass = scrolling ? ScrollLink : Link;
  return (
    <LinkClass link={link} onClick={onClick}>
      <Button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={classes.button}
        variant="contained"
        disableFocusRipple
        disableRipple
        disableElevation
        startIcon={
          imgSrc && (
            <Grid
              container
              alignItems="center"
              justify="center"
              className={
                hovered ? classes.iconWrapperHovered : classes.iconWrapper
              }
              style={iconBgStyle}
            >
              <img src={imgSrc} className={classes.icon} style={iconStyle} />
            </Grid>
          )
        }
      >
        <p className={hovered ? classes.titleHovered : classes.title}>
          {title}
        </p>
      </Button>
    </LinkClass>
  );
};
export default withTheme(
  withStyles((theme) => {
    return {
      button: {
        padding: 0,
        paddingLeft: 10,
        paddingRight: 10,
        color: "white",
        backgroundColor: "transparent",
        boxShadow: "none",
        borderRadius: 60,
        fontSize: 20,
        "&:hover": {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
        "&:focus": {
          outline: "none",
        },
      },
      img: {},
      icon: {
        width: 30,
        height: 30,
      },
      iconWrapper: {
        backgroundColor: "transparent",
        width: 40,
        height: 40,
        borderRadius: 60,
        transition: "background-color 0.5s",
      },
      iconWrapperHovered: {
        width: 40,
        height: 40,
        borderRadius: 60,
        backgroundColor: theme.palette.secondary.main,
        transition: "background-color 0.5s",
      },
      title: {
        color: theme.palette.text.primary,
      },
      titleHovered: {
        color: theme.palette.primary.main,
        transition: "color 0.5s",
      },
    };
  })(MyButton)
);
