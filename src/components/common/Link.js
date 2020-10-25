import React, { useState, useEffect } from "react"
import { Link as RSLink, animateScroll } from "react-scroll"
export const Link = ({ children, link }) => {
    return (
        <a href={link} target="_blank" style={{ textDecoration: "none" }}>
            {children}
        </a>
    )
}
export const ScrollLink = ({ children, link, duration = 400 }) => {
    const [appBarHeight, setAppBarHeight] = useState(0)
    useEffect(() => {
        let timeout
        const setOffset = () => {
            timeout = null
            if (document.getElementById("appbar")) {
                setAppBarHeight(document.getElementById("appbar").clientHeight)
            }
        }

        clearTimeout(timeout)
        timeout = setTimeout(setOffset, 500)
    }, [])
    return (
        <RSLink
            to={link}
            smooth={true}
            style={{ textDecoration: "none" }}
            offset={-appBarHeight}
            duration={duration}
        >
            {children}
        </RSLink>
    )
}
export const scroll = animateScroll
