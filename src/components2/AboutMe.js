import React, { useState, useEffect } from "react"
import "./styles/App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "typeface-poppins"
import { makeStyles, styled } from "@material-ui/core/styles"

import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"

import Hidden from "@material-ui/core/Hidden"
import Slide from "react-reveal/Slide"
import Button from "@material-ui/core/Button"

import { Link } from "./common/Link"
const AboutMe = (props) => {
    const cardClasses = cardStyles()
    const [checked, setChecked] = React.useState(false)

    const handleChange = () => {
        setChecked((prev) => !prev)
    }
    useEffect(() => {
        handleChange()
    }, [])

    return (
        <MyPaper id={props.id}>
            <Hidden smDown>
                <MyContainer maxWidth="lg">
                    <Card
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            background: "inherit",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <Typography
                            variant="h2"
                            component="h2"
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src="https://img.icons8.com/bubbles/100/000000/girl-with-chemical-test-tube.png"
                                style={{
                                    width: 95,
                                    height: 95,
                                    marginRight: 10,
                                }}
                            />
                            ABOUT ME
                        </Typography>
                        <Card
                            style={{
                                display: "flex",
                                background: "inherit",
                                justifyContent: "center",
                                width: "100%",
                                padding: "0.4em",
                                borderWidth: 1,
                                borderColor: "gray",
                                borderStyle: "solid",
                            }}
                        >
                            <CardMedia
                                style={{
                                    width: "50%",
                                    height: "5.5em",
                                    display: "flex",
                                    flex: 1,
                                    marginRight: 22,
                                }}
                                image="./kidme.jpeg"
                                title="Live from space album cover"
                            />
                            <div
                                style={{
                                    fontSize: "0.37em",
                                    color: "white",
                                    display: "flex",
                                    flex: 1,
                                    flexDirection: "column",
                                }}
                            >
                                <p
                                    style={{
                                        color: "white",
                                        display: "flex",
                                        flex: 1,
                                    }}
                                >
                                    I am a recent graduate of Carleton University
                                    with a B.C.S Honours. Through my work I have
                                    gained experience in C++ and React Native
                                    development. Outside of work, I usually develop
                                    projects in React, for quality of life apps, or
                                    mods for my favorite games.
                                </p>
                                <div>
                                    <Link link="./Resume.pdf">
                                        <MyButton
                                            variant="outlined"
                                            startIcon={
                                                <img
                                                    src="https://img.icons8.com/officel/80/000000/open-resume.png"
                                                    style={{
                                                        width: 45,
                                                        height: 45,
                                                        marginRight: 10,
                                                    }}
                                                />
                                            }
                                        >
                                            RESUME
                                        </MyButton>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    </Card>
                </MyContainer>
            </Hidden>

            <Hidden mdUp>
                <MyContainer2 maxWidth="lg">
                    <Card
                        style={{
                            height: "100%",
                            padding: 10,
                            background: "inherit",
                            borderColor: "gray",
                            borderWidth: 0,
                            borderStyle: "solid",
                            zIndex: 2,
                        }}
                    >
                        <div
                            style={{
                                padding: 10,
                                display: "flex",
                                flexDirection: "column",
                                overflow: "hidden",
                                flex: 1,
                                justifyContent: "center",
                                height: "100%",
                            }}
                        >
                            <div
                                style={{
                                    flexDirection: "column",
                                    display: "flex",
                                    height: "80%",
                                    position: "relative",
                                }}
                            >
                                <div
                                    style={{
                                        padding: 10,
                                        background: "#0D121E",
                                        borderColor: "gray",
                                        borderWidth: 1,
                                        borderStyle: "solid",
                                        zIndex: 2,
                                    }}
                                >
                                    <Typography
                                        variant="h2"
                                        component="h2"
                                        style={{
                                            color: "white",
                                            fontWeight: "bold",
                                            fontSize: "0.8em",
                                        }}
                                    >
                                        ABOUT ME
                                    </Typography>
                                </div>
                                <div
                                    style={{
                                        height: "40%",
                                        backgroundColor: "red",
                                        overflow: "hidden",
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >
                                    <CardMedia
                                        className={cardClasses.coverMobile}
                                        image="./kidme.jpeg"
                                        title="Live frrom space album cover"
                                    />
                                </div>
                                <div
                                    style={{
                                        padding: 10,
                                        background: "#0D121E",
                                        borderColor: "gray",
                                        borderWidth: 1,
                                        borderStyle: "solid",
                                        zIndex: 2,
                                    }}
                                >
                                    <p style={{ fontSize: "0.4em", color: "white" }}>
                                        I am a recent graduate of Carleton University
                                        with a B.C.S Honours. Through my work I have
                                        gained experience in C++ and React Native
                                        development. Outside of work, I usually
                                        develop projects in React, for quality of
                                        life apps, or mods for my favorite games.
                                    </p>
                                    <Link link="./Resume.pdf">
                                        <MyButton
                                            variant="outlined"
                                            startIcon={
                                                <img
                                                    src="https://img.icons8.com/officel/80/000000/open-resume.png"
                                                    style={{
                                                        width: 45,
                                                        height: 45,
                                                        marginRight: 10,
                                                    }}
                                                />
                                            }
                                        >
                                            RESUME
                                        </MyButton>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Card>
                </MyContainer2>
            </Hidden>
        </MyPaper>
    )
}
export default AboutMe

const MyContainer = styled(Container)({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
    padding: 0,
})

const MyContainer2 = styled(Container)({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "100vh",
    padding: 0,
})
const MyPaper = styled(Paper)({
    background: "inherit",
    color: "white",
})

const MyButton = styled(Button)({
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25,
    color: "white",
    background: "inherit",
    //  borderWidth: 1.5,
    borderRadius: 60,
    borderColor: "#466989",
    //  borderStyle: "solid",
    fontSize: 28,
    "&:hover": {
        //  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        background: "#161e30",
        borderColor: "transparent",
        boxShadow: "2px 3px 7px 0px rgba(0,0,0,0.64)",
    },
    "&:focus": {
        outline: "none",
    },
})

const cardStyles = makeStyles(() => ({
    root: {
        display: "flex",
        background: "inherit",
        boxShadow: "none",
        maxWidth: 600,
        "&:hover": {
            color: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        },
    },
    content: {
        flex: "1 0 auto",
        color: "white",
        flexDirection: "column",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flexStart",
    },
    subRow: {
        display: "flex",
    },
    quoteDiv: {
        height: "100%",
        background: "grey",
        width: 10,
        marginRight: 20,
    },
    title: {
        fontWeight: "bold",
    },
    subtitle1: {
        color: "#04B877",
    },
    subtitle2: {
        color: "#D30000",
    },
    multiColorString: {
        display: "flex",
    },
    coverMobile: {
        width: "100%",
        height: "40%",
        flexGrow: 1,
        position: "absolute",
    },
    coverDesktop: { width: "25em", height: "3em" },
}))
