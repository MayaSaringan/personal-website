import React from "react"
import { IconButton } from "@material-ui/core"
import { shadows } from '@material-ui/system';
import { makeStyles, createStyles, createMuiTheme } from "@material-ui/core/styles"
const useStyles = makeStyles((theme) => ({
    root: {
        padding: 2,
        borderRadius: 60,
        "&:focus": {
            outline: "none",
        },
        "&:hover": { 
            boxShadow: '2px 3px 7px 0px rgba(0,0,0,0.64)',
            background:'#28344f',

        },
    },
    img: {
        width: theme.width,
        height: theme.height,
        userDrag: "none",
        userSelect: "none"
    },
}))
const IconImageButton = (props) => {
    const classes = useStyles()
    return (
        <IconButton boxShadow={0}
            onClick={() => window.open(props.link, "_blank")}
            className={classes.root}
        >
            <img src={props.imgSrc} className={classes.img} />
        </IconButton>
    )
}
export default IconImageButton
