import React, { useState, useEffect } from "react";
import { Link as RSLink, animateScroll } from "react-scroll";
import MuiLink from "@material-ui/core/Link";
export const Link = ({ children, link, onClick }) => {
  return (
    <MuiLink href={link} target="_blank" underline="none" onClick={onClick}>
      {children}
    </MuiLink>
  );
};
export const ScrollLink = ({ children, link, duration = 400, style, onClick }) => {
  const [appBarHeight, setAppBarHeight] = useState(0);
  useEffect(() => {
    let timeout;
    const setOffset = () => {
      timeout = null;
      if (document.getElementById("appbar")) {
        setAppBarHeight(document.getElementById("appbar").clientHeight);
      }
    };

    clearTimeout(timeout);
    timeout = setTimeout(setOffset, 500);
  }, []);
  return (
    <RSLink
      to={link}
      smooth={true}
      style={{ textDecoration: "none", ...style }}
      offset={-appBarHeight}
      duration={duration} onClick={onClick}
    >
      {children}
    </RSLink>
  );
};
export const scroll = animateScroll;
