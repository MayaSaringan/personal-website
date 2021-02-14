import React, { useEffect, useState } from "react"
import {
    ThemeProvider,
    makeStyles,
    withStyles,
    createMuiTheme,
} from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

import YouTube from "react-youtube"
const descriptions = [
    {
        desc: () => {
            return (
                `Developed for the You.i Engine, a platform agnostic SDK; ` +
                `Written C++ APIs to implement and extend the React Native framework to use the You.i engine, ` +
                `enabling development for console, TV, desktop and all currently supported platforms by React Native through the You.i SDK.`
            )
        },
    },
    {
        desc: () => {
            return (
                `I like to make apps that already exist, but with all the features I want. ` +
                `I tend to develop in ReactJS or React Native, typically using an express server for the backend.`
            )
        },
    },
    {
        desc: () => {
            return (
                `I adore and love video games. I have an obscene amount of hours in games (12000+ in one game that I shall not name). ` +
                `My favourite game is Rimworld`
            )
        },
        thumbnail: `/rimworld.jpg`,
    },
    {
        desc: () =>
            `My favourite anime is Attack on Titan. My favourite TV series is Attack on Titan. My favourite anime character is L from Death Note. My favourite non-anime character is Sansa from Game of Thrones.`,
        thumbnail: `/aot2.jpg`,
    },
    {
        desc: () =>
            `Mediocre cook in progress. I went from making french toast that even my parents won't eat to making pretty good stirfry`,
        thumbnail: `/stirfry.jpg`,
    },
    {
        desc: () =>
            `Longest run distance: 2 miles, time taken: unimportant, it's the journey that matters 😤`,
        thumbnail: `/stirfry.jpg`,
    },
    {
        desc: () =>
            `2019 B.C.S Carleton University Graduate, 10.57 CGPA (CAN) / 3.7 GPA (US).`,
        thumbnail: `/aot.jpeg`,
    },
    {
        desc: function _() {
            return (
                <>
                    {`First generation immigrant from the `}
                    <span>&nbsp;</span>
                    <img
                        src="https://img.icons8.com/emoji/96/000000/philippines-emoji.png"
                        width={30}
                        height={30}
                    />
                    {`Philippines.`}
                </>
            )
        },
        thumbnail: `/aot.jpeg`,
    },
]
const themeInstance = createMuiTheme({
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    palette: {
        primary: {
            main: "#1976d2",
        },
    },
})
const Welcome = withStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: "100vh",
    },
    body: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
    },
    title: {
        fontSize: 56,
        fontWeight: "bold",
    },
    text: {
        fontSize: 18,
        lineHeight: 2,
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
    },
    descWrapper: {
        display: "flex",
        alignItems: "flex-start",
        marginTop: 10,
        width: "100%",
    },
    thumbnailWrapper: {
        overflow: "hidden",
    },
    thumbnail: {
        borderRadius: 6,
        height: 60,
        objectFit: "fill",
    },
})(({ classes }) => {
    return (
        <Box className={classes.root} id="work">
            <Box className={classes.body}>
                <Typography className={classes.title}>Work</Typography>
                <Box className={classes.descWrapper}>
                    <Grid container spacing={2}>
                        <Grid item xs>
                            <Grid container>
                                <Grid
                                    container
                                    direction="row"
                                    wrap="nowrap"
                                    sm
                                    alignItems={"center"}
                                    spacing={2}
                                >
                                    <Grid item>
                                        <img src="/youi-logo.png" width={70} />
                                    </Grid>
                                    <Grid item>
                                        <Grid container direction="column">
                                            <Typography className={classes.text}>
                                                Software Developer at You.iTV
                                            </Typography>
                                            <Typography className={classes.text}>
                                                React Native Team
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Typography className={classes.text}>
                                    {`Developed for the You.i Engine, a platform agnostic SDK; ` +
                                        `Written C++ APIs to implement and extend the React Native framework to use the You.i engine, ` +
                                        `enabling development for console, TV, desktop and all currently supported platforms by React Native through the You.i SDK.`}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <YouTube
                                videoId="aTrGWET6B0M"
                                opts={{ width: "100%", height: 200 }}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
})
export default Welcome
