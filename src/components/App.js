import React, { useState } from "react";
import "./App.css";
import ProfileCard from "./ProfileCard";
import ExperienceSection from "./ExperienceSection";
import DegreeSection from "./DegreeSection";
import AboutSection from "./AboutSection";
import SideProjectsSection from "./SideProjectsSection";
import RandomFactsSection from "./RandomFactsSection";
import Footer from "./Footer";
import { aboutText, randomFacts } from "../Data/about";
import { degree } from "../Data/degree";
import { profile } from "../Data/profile";
import { jobs } from "../Data/work";
import projectsData from "../Data/projects.json";

const sideProjects = projectsData.descriptions.map((p) => ({
  name: p.title,
  desc: p.description,
  link: p.link,
}));

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`main-wrapper${darkMode ? " dark-mode" : ""}`}>
      <header className="site-header">
        <button
          className="theme-toggle"
          onClick={() => setDarkMode((d) => !d)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        Welcome to mayasaringan.me :) - Maya Saringan
      </header>
      <main className="main-content">
        <div className="box">
          <ProfileCard {...profile} />
        </div>
        <div className="columns">
          <div className="column left-column">
            <div className="box">
              <ExperienceSection jobs={jobs} />
              <DegreeSection {...degree} />
              <AboutSection aboutText={aboutText} />
            </div>
          </div>
          <div className="column right-column">
            <div className="box">
              <SideProjectsSection projects={sideProjects} />
              <RandomFactsSection facts={randomFacts} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
