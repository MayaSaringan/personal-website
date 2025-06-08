import React from "react";
const netflixImgSrc = "/netflix.png";
const ProfileCard = ({ imgSrc, imgAlt, title, bio, tags }) => (
  <section className="profile-card section">
    <div className="section-title">
      {title} <img className="company netflix" src={netflixImgSrc} />
    </div>
    <div className="profile-card-content">
      <img className="profile-img" src={imgSrc} alt={imgAlt} />
      <div className="profile-info">
        <div className="profile-bio">
          {bio.map((_bio) => (
            <p>{_bio}</p>
          ))}
          <span className="profile-tags">{tags}</span>
          <span className="profile-reaction">❤️</span>
        </div>
        <div className="profile-buttons">
          <a
            className="icon-button link-btn"
            href="mailto:mayas.saringan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: 0 }}
          >
            <img
              src="https://img.icons8.com/?size=100&id=42209&format=png&color=000000"
              alt="email"
            />
          </a>
          <a
            className="icon-button link-btn"
            href="https://github.com/MayaSaringan"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: 0 }}
          >
            <img
              src="https://img.icons8.com/?size=100&id=zehXPLJSAbBB&format=png&color=000000"
              alt="github"
            />
          </a>
          <a
            className="icon-button link-btn"
            href="https://linkedin.com/in/msaringan"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: 0 }}
          >
            <img
              src="https://img.icons8.com/?size=100&id=RvzNyBfqOKDa&format=png&color=000000"
              alt="linkedin"
            />
          </a>
          <a
            className="icon-button resume-btn"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
        <div className="spacer"></div>
        <img
          src="/skyline.png"
          alt="city skyline"
          className="city-skyline-img"
        />
      </div>
    </div>
  </section>
);

export default ProfileCard;
