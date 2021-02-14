import React, { useEffect, useState } from "react"
import "./styles/App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./NavBar"
import NavBar2 from "./NavBar2"
import Home from "./Home"
import Home2 from "./Home2"
import AboutMe from "./AboutMe"
import Footer from "./Footer"
import SideProjects from "./SideProjects"
import Work from "./Work"

const temp = () => {
    return (
        <>
            <NavBar2 />
            <Home2 id="home" />
            <AboutMe id="about" />
            <Work id="work" />
            <SideProjects id="projects" />
            <Footer id="footer" />
        </>
    )
}

const temp2 = () => {
    return (
        <>
            <NavBar2 />
            <Home2 id="home" />
            <AboutMe id="about" />
            <Work id="work" />
            <SideProjects id="projects" />
            <Footer id="footer" />
        </>
    )
}
const App = () => {
    const [doneLoading, setDoneLoading] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            const loader = document.querySelector(".loader")
            loader.classList.add("loader--hide")
            setDoneLoading(!doneLoading)
        }, 0)
    }, [])

    if (!doneLoading) {
        return null
    }
    return temp2()
}

export default App
