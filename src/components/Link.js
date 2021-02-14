import React, { useContext } from "react";
import { Link as RSLink } from "react-scroll";
import MuiLink from "@material-ui/core/Link";
import { NavbarContext } from "./Navbar";
export const Link = ({ children, link, onClick }) => {
  return (
    <MuiLink href={link} target="_blank" underline="none" onClick={onClick}>
      {children}
    </MuiLink>
  );
};
export const ScrollLink = ({
  children,
  link,
  duration = 400,
  style,
  onClick,
}) => {
  const { appbarHeight } = useContext(NavbarContext);
  return (
    <RSLink
      to={link}
      smooth={true}
      offset={-appbarHeight}
      style={{ textDecoration: "none", ...style }}
      duration={duration}
      onClick={onClick}
    >
      {children}
    </RSLink>
  );
};

export { animateScroll as scroll } from "react-scroll";
