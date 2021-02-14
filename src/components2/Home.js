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

import { ScrollLink } from "./common/Link"
import MenuIcon from "@material-ui/icons/Menu"

import Container from "@material-ui/core/Container"

import Paper from "@material-ui/core/Paper"

import Card from "@material-ui/core/Card"

import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import IconImageButton from "./common/IconImageButton"
import Typography from "@material-ui/core/Typography"

import Fade from "@material-ui/core/Fade"
import Button from "@material-ui/core/Button"

import Hidden from "@material-ui/core/Hidden"
import { NavHashLink } from "react-router-hash-link"
const Home = (props) => {
    const cardClasses = cardStyles()
    const [checked, setChecked] = React.useState(false)

    const handleChange = () => {
        setChecked((prev) => !prev)
    }
    useEffect(() => {
        handleChange()
    }, [])
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
        const yOffset = 0
        window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" })
    }
    return (
        <MyPaper id={props.id}>
            <MyContainer maxWidth="lg">
                <Hidden smDown>
                    <Card className={cardClasses.root}>
                        <CardContent className={cardClasses.content}>
                            <ThemeProvider
                                theme={createMuiTheme({ width: 80, height: 80 })}
                            >
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
                        </CardContent>
                        <CardContent className={cardClasses.content}>
                            <Typography className={cardClasses.title}>
                                Maya Saringan
                            </Typography>
                            <div className={cardClasses.subRow}>
                                <div className={cardClasses.quoteDiv} />
                                <div>
                                    <Typography
                                        variant="h4"
                                        component="h2"
                                        className={cardClasses.subtitle1}
                                    >
                                        Software Developer
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        component="h2"
                                        className={cardClasses.multiColorString}
                                    >
                                        at
                                        <div className={cardClasses.subtitle2}>
                                            &nbsp; Youi.TV
                                        </div>
                                    </Typography>
                                </div>
                            </div>
                            <div>
                                <ScrollLink link={"about"} duration={400}>
                                    <MyButton
                                        variant="outlined"
                                        startIcon={
                                            <img
                                                src="https://img.icons8.com/bubbles/100/000000/girl-with-chemical-test-tube.png"
                                                style={{
                                                    width: 65,
                                                    height: 65,
                                                    marginRight: 10,
                                                }}
                                            />
                                        }
                                    >
                                        ABOUT ME
                                    </MyButton>
                                </ScrollLink>
                            </div>
                        </CardContent>
                    </Card>
                </Hidden>
                <Hidden mdUp>
                    <Card className={cardClasses.root2}>
                        <CardContent className={cardClasses.content}>
                            <Typography className={cardClasses.title}>
                                Maya Saringan
                            </Typography>
                            <Typography
                                variant="h4"
                                component="h2"
                                className={cardClasses.subtitle1}
                            >
                                Software Developer
                            </Typography>
                            <Typography
                                variant="h4"
                                component="h2"
                                className={cardClasses.multiColorString}
                            >
                                at
                                <div className={cardClasses.subtitle2}>
                                    &nbsp; Youi.TV
                                </div>
                            </Typography>

                            <div>
                                <div>
                                    <ScrollLink link={"about"} duration={400}>
                                        <MyButton
                                            variant="outlined"
                                            startIcon={
                                                <img
                                                    src="https://img.icons8.com/bubbles/100/000000/girl-with-chemical-test-tube.png"
                                                    style={{
                                                        width: 65,
                                                        height: 65,
                                                        marginRight: 10,
                                                    }}
                                                />
                                            }
                                        >
                                            ABOUT ME
                                        </MyButton>
                                    </ScrollLink>
                                    <ThemeProvider
                                        theme={createMuiTheme({
                                            width: 80,
                                            height: 80,
                                        })}
                                    >
                                        <div style={{ display: "flex" }}>
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
                                        </div>
                                    </ThemeProvider>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Hidden>
            </MyContainer>
        </MyPaper>
    )
}
export default Home

const MyContainer = styled(Container)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    marginTop: -50,

    fontFamily: "Quicksand",
})

const MyPaper = styled(Paper)({
    background: "inherit",
    color: "white",
    minHeight: 800,

    fontFamily: "Quicksand",
})

const MyButton = styled(Button)({
    color: "white",
    background: "inherit",
    textDecoration: "none",
    borderRadius: 60,
    borderColor: "#466989",
    fontSize: 28,
    "&:hover": {
        //  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        background: "#161e30",
        borderColor: "transparent",
        boxShadow: "2px 3px 7px 0px rgba(0,0,0,0.64)",
        textDecoration: "none",
    },
    "&:focus": {
        outline: "none",
        textDecoration: "none",
    },

    fontFamily: "Quicksand",
    zIndex: 2,
})

const cardStyles = makeStyles(() => ({
    root: {
        display: "flex",
        background: "inherit",
        boxShadow: "none",
        "&:hover": {
            color: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        },

        fontFamily: "Quicksand",
    },
    root2: {
        display: "flex",
        background: "inherit",
        boxShadow: "none",
        flexDirection: "column",
        "&:hover": {
            color: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        },

        fontFamily: "Quicksand",
        alignItems: "center",
    },
    content: {
        color: "white",
        flexDirection: "column",
        display: "flex",
        justifyContent: "space-between",
    },
    subRow: {
        display: "flex",
        flex: 1,
    },
    quoteDiv: {
        height: "100%",
        background: "grey",
        width: 10,
        marginRight: 20,
    },
    title: {
        fontWeight: "bold",
        fontSize: "1em",

        fontFamily: "Quicksand",
    },
    subtitle1: {
        color: "#04B877",

        fontFamily: "Quicksand",
    },
    subtitle2: {
        color: "#D30000",

        fontFamily: "Quicksand",
    },
    multiColorString: {
        display: "flex",
    },
}))
