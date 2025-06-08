import React from "react";

const SideProjectsSection = ({ projects = [] }) => (
  <section className="section sides">
    <div className="section-title">The Sides</div>
    <ul className="side-list">
      {projects.map((project, idx) => (
        <li key={idx}>
          <b>{project.name}</b>
          <br />
          {project.desc} {project.link && <a href={project.link}>See here</a>}
        </li>
      ))}
    </ul>
  </section>
);

export default SideProjectsSection;
