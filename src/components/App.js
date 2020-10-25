import React, { useEffect, useState } from "react"
import "./styles/App.css"
import "bootstrap/dist/css/bootstrap.min.css" 
import NavBar from "./NavBar"
import Home from "./Home"
import AboutMe from "./AboutMe"
import Footer from "./Footer"

import SideProjects from "./SideProjects"
import Work from "./Work"
const App = () => {
    const [doneLoading, setDoneLoading] = useState(false)
    useEffect(() => {
        setTimeout( () => {

            const loader = document.querySelector(".loader")
            loader.classList.add("loader--hide")
            setDoneLoading(!doneLoading)
        },600)
    }, [])

    if (!doneLoading){
        return null
    }
    return (
        <>
            <NavBar />
            <Home id="home" />
            <AboutMe id="about" />
            <Work id="work" />
            <SideProjects id="projects"/>
            <Footer id="footer"/>
        </>
    )
}

export default App