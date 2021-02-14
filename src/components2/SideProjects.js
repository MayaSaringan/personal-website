import React, { useState, useEffect } from "react"
import "./styles/App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "typeface-poppins"
import { makeStyles, styled } from "@material-ui/core/styles"

import Container from "@material-ui/core/Container"

import Paper from "@material-ui/core/Paper"

import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"

import Hidden from "@material-ui/core/Hidden"
import Slide from "react-reveal/Slide"
import Button from "@material-ui/core/Button"
class ProjectTile extends React.Component {
    constructor(props) {
        super(props)
    }
    render = () => {
        return (
            <a href={this.props.link}>
                <img
                    src={this.props.src}
                    width={400}
                    height={260}
                    style={{ padding: 20, resizeMode: "center", borderRadius: 15 }}
                />
            </a>
        )
    }
}
const SideProjects = (props) => {
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
                            justifyContent: "center",
                            width: "100%",
                        }}
                        elevation={0}
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
                                src="https://img.icons8.com/dusk/64/000000/innovation.png"
                                style={{
                                    width: 95,
                                    height: 95,
                                    marginRight: 10,
                                }}
                            />
                            SIDE PROJECTS
                        </Typography>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                flexWrap: "wrap",
                                alignContent: "flex-start",
                            }}
                        >
                            <ProjectTile
                                src="/moneyWatchPreview1.png"
                                link="https://github.com/MayaSaringan/money-watch"
                            />
                            <ProjectTile
                                src="/browserbuddies.png"
                                link={"https://devpost.com/software/browser-buddies"}
                            />
                            <ProjectTile
                                src="/farmfight.png"
                                link="https://globalgamejam.org/2020/games/farm-fight-6"
                            />
                            <ProjectTile
                                src="/sims4pregnancymod.png"
                                link="https://github.com/MayaSaringan/Sims4-Pregnancy-Adoption-Mod"
                            />
                            <ProjectTile
                                src="/raid.png"
                                link="https://github.com/MayaSaringan/raids-shadow-legends-tool"
                            />
                        </div>
                    </Card>
                </MyContainer>
            </Hidden>

            <Hidden mdUp>
                <MyContainer2 maxWidth="lg">
                    <div
                        style={{
                            padding: 10,
                            display: "flex",
                            flexDirection: "column",
                            overflow: "hidden",
                            flex: 1,
                            width: "100%",
                            justifyContent: "center",
                            height: "100%",
                        }}
                    >
                        <Typography
                            variant="h2"
                            component="h2"
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: "1em",
                            }}
                        >
                            SIDE PROJECTS
                        </Typography>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                flexWrap: "wrap",
                                alignContent: "flex-start",
                                flex: 1,
                            }}
                        >
                            <ProjectTile
                                src="/browserbuddies.png"
                                link={"https://devpost.com/software/browser-buddies"}
                            />
                            <ProjectTile
                                src="/sims4pregnancymod.png"
                                link="https://github.com/MayaSaringan/Sims4-Pregnancy-Adoption-Mod"
                            />
                            <ProjectTile
                                src="/raid.png"
                                link="https://github.com/MayaSaringan/raids-shadow-legends-tool"
                            />
                        </div>
                    </div>
                </MyContainer2>
            </Hidden>
        </MyPaper>
    )
}
export default SideProjects

const MyContainer = styled(Container)({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
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
    elevation: 0,
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
        position: "absolute",
        borderColor: "gray",
        borderWidth: 1,
        borderStyle: "solid",
        zIndex: 2,
    },
    coverDesktop: { width: "25em", height: "3em" },
}))
