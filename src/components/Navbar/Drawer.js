import React from "react";
import Drawer from "@material-ui/core/Drawer";
import PageItems from "./PageItems";
import { withStyles } from "@material-ui/core/styles";

const TemporaryDrawer = ({ toggleDrawer, open, classes }) => {
  const handleKeyEvent = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    toggleDrawer && toggleDrawer(false);
  };
  return (
    <Drawer
      anchor={"left"}
      open={open}
      onClose={() => toggleDrawer && toggleDrawer(false)}
    >
      <div
        className={classes.list}
        role="presentation"
        onClick={() => toggleDrawer && toggleDrawer(false)}
        onKeyDown={handleKeyEvent}
      >
        <PageItems direction="column" onKeyDown={handleKeyEvent} />
      </div>
    </Drawer>
  );
};

export default withStyles({
  list: {
    width: 250,
  },
})(TemporaryDrawer);
