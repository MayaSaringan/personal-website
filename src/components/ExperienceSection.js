import React from "react";

const ExperienceSection = ({ jobs = [] }) => (
  <section className="section trilogy">
    <div className="section-title">The Trilogy</div>
    {jobs.map((job, idx) => (
      <div className="job" key={idx}>
        <div className="job-company">
          <img className="company netflix" src={job.companyLogo} />
          <span className="role">{job.role}</span>
        </div>
        {job.team && <div className="job-team">{job.team}</div>}
        <div className="job-desc">{job.desc}</div>
      </div>
    ))}
  </section>
);

export default ExperienceSection;
