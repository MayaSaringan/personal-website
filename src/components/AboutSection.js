import React from "react";

const AboutSection = ({ aboutText }) => (
  <section className="section about-me">
    <div className="section-title">More About Me</div>
    <div className="about-text">
      {aboutText.split("\n").map((line, idx) => (
        <React.Fragment key={idx}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </div>
  </section>
);

export default AboutSection;
