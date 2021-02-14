import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import { blue } from "@material-ui/core/colors";

import { makeStyles, withStyles, withTheme } from "@material-ui/core/styles";

const Navbar = withTheme(
  withStyles((theme) => {
    const contactButtonDim = 30;
    return {
      contactButtonsWrapper: {
        padding: 2,
        transition: "background-color 0.5s",
        background: "transparent",
        "&:hover": {
          background: theme.palette.primary.main,
        },
      },
      contactButtons: {
        width: contactButtonDim,
        height: contactButtonDim,
        userDrag: "none",
        userSelect: "none",
      },
      side: {
        display: "flex",
        alignItems: "center",
      },
    };
  })(({ classes }) => {
    return (
      <div className={classes.side}>
        <IconButton
          className={classes.contactButtonsWrapper}
          href={"https://github.com/MayaSaringan"}
          target="_blank"
        >
          <img
            src="https://img.icons8.com/doodle/192/000000/github--v1.png"
            className={classes.contactButtons}
          />
        </IconButton>
        <IconButton
          className={classes.contactButtonsWrapper}
          href={"https://www.linkedin.com/in/msaringan/"}
          target="_blank"
        >
          <img
            src="https://img.icons8.com/doodle/192/000000/linkedin-circled.png"
            className={classes.contactButtons}
          />
        </IconButton>
        <IconButton
          className={classes.contactButtonsWrapper}
          href={"mailto:contact@mayasaringan.me"}
          target="_blank"
        >
          <img
            src="https://img.icons8.com/doodle/96/000000/mail-with-wings.png"
            className={classes.contactButtons}
          />
        </IconButton>
      </div>
    );
  })
);

export default Navbar;
