/*
          <p>Work</p>
          <p>You.iTv - Software Developer</p>
          <p>
              Extending the React Native framework to utilize a C++ engine for
              developing apps for over 10 different platforms!{" "}
          </p>

          <p>Projects</p>
          <p>MoneyWatch</p>
          <p>ReactJs, nodejs, firebase, react-redux, materialui</p>
          <p>Finance Management app</p>
          <p>Farmfight</p>
          <p>Gamemaker</p>
          <p>GGJ 2020 Group project</p>
          <p>Sims 4</p>
          <p>Python</p>
          <p>Pregnancy mod</p>
          <p>Browserbuddies</p>
          <p>reactjs, nodejs</p>
          <p>Google chrome extension</p
          </>
    )
})
*/
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
import Link from "@material-ui/core/Link"
import * as data from "../Data/projects.json"
const descriptions = data.descriptions
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
    projectTitle: {
        fontSize: 24,
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
    preview: {
        borderRadius: 6,
        width: "100%",
        objectFit: "cover",
    },
    tagBg: {
        backgroundColor: "grey",
        padding: 3,
        borderRadius: 4,
        color: "white",
    },
    tag: {
        margin: 0,
    },
})(({ classes }) => {
    return (
        <Box className={classes.root} id="projects">
            <Box className={classes.body}>
                <Typography className={classes.title}>Projects</Typography>
                {descriptions.map((desc, i) => {
                    return (
                        <Box
                            className={classes.descWrapper}
                            key={"projects-desc-" + i}
                        >
                            <Grid container spacing={2} alignItems={"center"}>
                                <Grid item xs>
                                    <Typography className={classes.projectTitle}>
                                        <Link href={desc.link} underline="none">
                                            {desc.title}
                                        </Link>
                                    </Typography>
                                    <Grid
                                        container
                                        spacing={2}
                                        alignItems={"center"}
                                    >
                                        {desc.tags.map((tag, i) => {
                                            return (
                                                <Grid item>
                                                    <Box className={classes.tagBg}>
                                                        <Typography
                                                            className={classes.tag}
                                                        >
                                                            {tag}
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                            )
                                        })}
                                    </Grid>
                                    <Typography className={classes.text}>
                                        {desc.description}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <img
                                        src={desc.preview}
                                        className={classes.preview}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
})
export default Welcome
