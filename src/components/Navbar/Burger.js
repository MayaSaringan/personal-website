import React from "react";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const Burger = ({ onPress }) => {
  return (
    <Hidden smUp>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => {
          onPress && onPress(true);
        }}
      >
        <MenuIcon />
      </IconButton>
    </Hidden>
  );
};

export default Burger;
