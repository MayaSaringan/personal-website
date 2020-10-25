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

import Container from "@material-ui/core/Container"

import Paper from "@material-ui/core/Paper"

import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"

import Hidden from "@material-ui/core/Hidden"
import Slide from "react-reveal/Slide"
import Button from "@material-ui/core/Button"

import YouTube from "react-youtube"
const WorkCard = (props) => {
    if (!props.mobile) {
        return (
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
                    marginBottom: 40,
                }}
            >
                <div
                    style={{
                        fontSize: "0.37em",
                        color: "white",
                        display: "flex",
                        flex: 1,
                        flexDirection: "column",
                        justifyContent: "flex-start",
                    }}
                >
                    <div
                        style={{
                            color: "white",
                            display: "flex",
                            flexDirection: "row",
                        }}
                    >
                        <img
                            src={props.logo}
                            style={{
                                height: 95,
                                marginRight: 10,
                            }}
                        />
                        <p
                            style={{
                                color: "white",
                                display: "flex",
                                flexDirection: "column",
                                fontWeight: "bold",
                            }}
                        >
                            {props.title}
                            <div
                                style={{
                                    flexShrink: 3,
                                    display: "flex",
                                    flex: 0,
                                }}
                            >
                                <div
                                    style={{
                                        background: "gray",
                                        padding: 8,
                                        flexShrink: 3,
                                        display: "flex",
                                    }}
                                >
                                    {props.subTitle}
                                </div>
                            </div>
                        </p>
                    </div>
                    <p
                        style={{
                            color: "white",
                            display: "flex",
                            flex: 1,
                        }}
                    >
                        {props.children}
                    </p>
                </div>
                {props.media && (
                    <div
                        style={{
                            fontSize: "0.37em",
                            color: "white",
                            display: "flex",
                            flex: 1,
                            flexDirection: "column",
                            margin: 10,
                        }}
                    >
                        {props.media}
                    </div>
                )}
            </Card>
        )
    } else {
        return (
            <div style={{ marginBottom: 40 }}>
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
                    <div
                        style={{
                            color: "white",
                            display: "flex",
                            flexDirection: "row",
                        }}
                    >
                        <img
                            src={props.logo}
                            style={{
                                height: 65,
                                marginRight: 10,
                            }}
                        />
                        <p
                            style={{
                                color: "white",
                                display: "flex",
                                flexDirection: "column",
                                fontWeight: "bold",
                                fontSize: "0.4em",
                            }}
                        >
                            {props.title}
                            <div
                                style={{
                                    flexShrink: 3,
                                    display: "flex",
                                    flex: 0,
                                }}
                            >
                                {" "}
                                <div
                                    style={{
                                        background: "gray",
                                        padding: 8,
                                        flexShrink: 3,
                                        display: "flex",
                                    }}
                                >
                                    {props.subTitle}
                                </div>
                            </div>
                        </p>
                    </div>
                </div>
                {props.media}
                <div
                    style={{
                        padding: 10,
                        background: "#0D121E",
                        borderColor: "gray",
                        borderWidth: 1,
                        borderStyle: "solid",
                    }}
                >
                    <p style={{ fontSize: "0.4em", color: "white" }}>
                        {props.children}
                    </p>
                </div>
            </div>
        )
    }
}
const Work = (props) => {
    const cardClasses = cardStyles()
    const [checked, setChecked] = React.useState(false)

    const handleChange = () => {
        setChecked((prev) => !prev)
    }
    useEffect(() => {
        handleChange()
    }, [])

    return (
        <MyPaper elevation={0} id={props.id}>
            <Hidden smDown>
                <MyContainer maxWidth="lg">
                    <Card
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            background: "inherit",
                            width: "100%",
                            marginBottom: 20,
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
                                src="https://img.icons8.com/doodle/96/000000/home-office.png"
                                style={{
                                    width: 95,
                                    height: 95,
                                    marginRight: 10,
                                }}
                            />
                            WORK
                        </Typography>
                        <WorkCard
                            mobile={false}
                            logo={"./youi-logo.png"}
                            title={"Software Developer at Youi.TV"}
                            subTitle={"React Native Team"}
                            media={
                                <YouTube
                                    videoId="aTrGWET6B0M"
                                    opts={{ width: "100%" }}
                                />
                            }
                        >
                            Contributed to the React Native layer of the Youi.TV engine SDK. Experienced in automated testing for C++ and react. Worked in a team following the Scrum framework. Experienced in peer code reviews
                        </WorkCard>
                        <WorkCard
                            mobile={false}
                            logo={"./carleton.png"}
                            title={"Teaching Assistant at Carleton University"}
                            subTitle={"Intro to Software Engineering course"}
                        >
                            Reinforced object oriented programming concepts for
                            students through interactive sessions. Clarified how
                            memory works in C++, as well as demonstrated debugging
                            strategies to students. Graded assignments in a timely
                            fashion and provided feedback.
                        </WorkCard>
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
                            borderWidth: 0,
                            marginBottom: 20,
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
                                    padding: 10,
                                    background: "#0D121E",
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
                                    WORK
                                </Typography>
                            </div>
                            <WorkCard
                                mobile={true}
                                logo={"./youi-logo.png"}
                                title={"Software Developer at Youi.TV"}
                                subTitle={"React Native Team"}
                                media={
                                    <YouTube
                                        videoId="aTrGWET6B0M"
                                        opts={{ width: "100%", height: "100%" }}
                                    />
                                }
                            >
                                Contributed to the React Native layer of the Youi.TV engine SDK. Experienced in automated testing for C++ and react. Worked in a team following the Scrum framework. Experienced in peer code reviews
                            </WorkCard>
                            <WorkCard
                                mobile={true}
                                logo={"./carleton.png"}
                                title={"Teaching Assistant at Carleton University"}
                                subTitle={"Intro to Software Engineering course"}
                            >
                                Reinforced object oriented programming concepts for
                                students through interactive sessions. Clarified how
                                memory works in C++, as well as demonstrated
                                debugging strategies to students. Graded assignments
                                in a timely fashion and provided feedback.
                            </WorkCard>
                        </div>
                    </Card>
                </MyContainer2>
            </Hidden>
        </MyPaper>
    )
}
export default Work

const MyContainer = styled(Container)({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100vh",
})

const MyContainer2 = styled(Container)({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    minHeight: "100vh",
    padding: 0,
    borderWidth: 0,
    boxShadow: "none",
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
        height: "7em",
        flexGrow: 1,
    },
    coverDesktop: { width: "25em", height: "3em" },
}))
