import React, { useState, useEffect } from "react"
import "./styles/App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "typeface-poppins"
import {
    ThemeProvider,
    makeStyles,
    styled,
    createMuiTheme,
} from "@material-ui/core/styles"

import { Link, animateScroll as scroll } from "react-scroll"
import MenuIcon from "@material-ui/icons/Menu"

import Container from "@material-ui/core/Container"

import Paper from "@material-ui/core/Paper"

import Card from "@material-ui/core/Card"

import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import IconImageButton from "./IconImageButton"
import Typography from "@material-ui/core/Typography"

import Fade from "@material-ui/core/Fade"
import Button from "@material-ui/core/Button"

import Hidden from "@material-ui/core/Hidden"
import { NavHashLink } from "react-router-hash-link"
const Footer = (props) => {
    return (
        <MyPaper id={props.id}>
            <MyContainer maxWidth="lg">
                <ThemeProvider theme={createMuiTheme({ width: 80, height: 80 })}>
                    <IconImageButton
                        link="https://github.com/MayaSaringan"
                        imgSrc="https://img.icons8.com/doodle/192/000000/github--v1.png"
                    />
                    <IconImageButton
                        link="https://www.linkedin.com/in/msaringan/"
                        imgSrc="https://img.icons8.com/doodle/192/000000/linkedin-circled.png"
                    />
                    <IconImageButton
                        link="mailto:contact@mayasaringan.me"
                        imgSrc="https://img.icons8.com/doodle/96/000000/mail-with-wings.png"
                    />
                </ThemeProvider>
            </MyContainer>
        </MyPaper>
    )
}
export default Footer

const MyContainer = styled(Container)({
    display: "flex",
    alignItems: "center",
    flex: 1,
    padding: 40,
    justifyContent: "center",
})

const MyPaper = styled(Paper)({
    background: "inherit",
    color: "white",
})
