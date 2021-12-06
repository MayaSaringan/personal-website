import React, { useEffect, useState } from "react";
import IconButton from "@material-ui/core/IconButton";

import { withStyles, withTheme } from "@material-ui/core/styles";

const Navbar = withTheme(
  withStyles((theme) => {
    const contactButtonDim = 30;
    return {
      contactButtonsWrapper: {
        padding: 2,
        transition: "background-color 0.5s",
        background: "transparent",
        "&:hover": {
          background: theme.palette.secondary.main,
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
          href={"mailto:mayas.saringan@gmail.com"}
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
