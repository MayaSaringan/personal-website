import React, { useState, useEffect } from "react"
import "./styles/App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "typeface-poppins"
import { makeStyles, styled } from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"
import { AppBar, Toolbar, Typography, Grid, Hidden, Button } from "@material-ui/core"
import CssBaseline from "@material-ui/core/CssBaseline"
import List from "@material-ui/core/List"
import Drawer from "@material-ui/core/Drawer"
import Slide from "@material-ui/core/Slide"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"

import clsx from "clsx"
const drawerWidth = 240
const MyButton = ({ title, imgSrc, link }) => {
    const [hovered, setHovered] = useState(false)
    let classes = buttonStyles()
    return (
        <Button
            onMouseEnter={() => setHovered(!hovered)}
            onMouseLeave={() => setHovered(!hovered)}
            className={classes.button}
            variant="contained"
            startIcon={
                <img
                    src={imgSrc}
                    className={`button-img${hovered ? `-hovered` : ``}`}
                />
            }
            onClick={() =>
                link.includes("./")
                    ? window.open(link)
                    : (window.location.hash = link)
            }
        >
            <p className={`title${hovered ? `-hovered` : ``}`}>{title}</p>
        </Button>
    )
}

const MyAppBar = styled(AppBar)({
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderImage: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderImageSlice: 1,
    backgroundColor: "inherit",
    borderColor: "transparent", // "#28344f",
    boxShadow: "none",
    position: "sticky",

    "&:hover": {
        //  borderImage:'none',
        //   boxShadow: "2px 3px 7px 0px rgba(0,0,0,0.64)",
    },
})
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}))

const drawerStyles = makeStyles(() => ({
    paper: {
        background: "#0D121E",
        borderWidth: 0,
        borderRightWidth: 1,
        borderStyle: "solid",
        borderColor: "gray",
        color: "white",
    },
}))
const NavBar = () => {
    const classes = useStyles()
    const drawerClasses = drawerStyles()
    classes.hide = {
        display: "none",
    }
    const [checked, setChecked] = useState(false)

    const handleChange = () => {
        setChecked((prev) => !prev)
    }
    const handleResize = () => {
        setOpen(false)
    }
    useEffect(() => {
        handleChange()
        window.addEventListener("resize", handleResize)
    }, [])
    const [open, setOpen] = React.useState(false)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }
    return (
        <>
            <Drawer
                style={{
                    width: drawerWidth,
                    // flexShrink: 0,
                    background: "#0D121E",
                }}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: drawerClasses.paper,
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        // necessary for content to be below app bar

                        justifyContent: "flex-start",
                    }}
                >
                    <IconButton
                        onClick={handleDrawerClose}
                        style={{ color: "white" }}
                    >
                        {" "}
                        x
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button>
                        <MyButton
                            title="ABOUT ME"
                            imgSrc="https://img.icons8.com/office/80/000000/cool.png"
                            link="#about"
                        />
                    </ListItem>
                    <ListItem button>
                        <MyButton
                            title="WORK"
                            imgSrc="https://img.icons8.com/doodle/96/000000/home-office.png"
                            link="#work"
                        />
                    </ListItem>
                    <ListItem button>
                        <MyButton
                            title="PROJECTS"
                            imgSrc="https://img.icons8.com/dusk/64/000000/innovation.png"
                            link="#projects"
                        />
                    </ListItem>
                    <ListItem button>
                        <MyButton
                            title="RESUME"
                            imgSrc="https://img.icons8.com/officel/80/000000/open-resume.png"
                            link="./Resume.pdf"
                        />
                    </ListItem>
                </List>
            </Drawer>
            <Slide
                direction="down"
                in={checked}
                mountOnEnter
                unmountOnExit
                timeout={1000}
            >
                <MyAppBar position="sticky">
                    <Toolbar className="test2">
                        <Hidden mdUp>
                            <IconButton
                                edge="start"
                                className={
                                    classes.menuButton +
                                    " " +
                                    clsx(open && classes.hide)
                                }
                                style={{ display: !open ? "block" : "none" }}
                                color="inherit"
                                aria-label="menu"
                                onClick={handleDrawerOpen}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Hidden>

                        <Hidden smDown>
                            <Grid
                                container
                                direction="row"
                                justify="space-around"
                                alignItems="center"
                            >
                                <MyButton
                                    title="ABOUT ME"
                                    imgSrc="https://img.icons8.com/office/80/000000/cool.png"
                                    link="#about"
                                />
                                <MyButton
                                    title="WORK"
                                    imgSrc="https://img.icons8.com/doodle/96/000000/home-office.png"
                                    link="#work"
                                />
                                <MyButton
                                    title="PROJECTS"
                                    imgSrc="https://img.icons8.com/dusk/64/000000/innovation.png"
                                    link="#projects"
                                />
                                <MyButton
                                    title="RESUME"
                                    imgSrc="https://img.icons8.com/officel/80/000000/open-resume.png"
                                    link="./Resume.pdf"
                                />
                            </Grid>
                        </Hidden>
                    </Toolbar>
                </MyAppBar>
            </Slide>
        </>
    )
}
export default NavBar
const buttonStyles = makeStyles(() => ({
    button: {
        padding: 0,
        paddingLeft: 10,
        paddingRight: 10,
        color: "white",
        background: "inherit",
        boxShadow: "none",
        borderRadius: 60,
        fontSize: 28,
        "&:hover": {
            background: "transparent",
            boxShadow: "none",
        },
        "&:focus": {
            outline: "none",
        },
    },
    img: {},
}))
