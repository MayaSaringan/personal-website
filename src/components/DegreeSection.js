import React from "react";

const DegreeSection = ({ university, degree, distinction }) => (
  <section className="section degree">
    <div className="section-title">The Degree</div>
    <div className="degree-info">
      <span className="university">{university}</span>{" "}
      <span className="degree">{degree}</span>
      <span className="distinction">{distinction}</span>
    </div>
  </section>
);

export default DegreeSection;
