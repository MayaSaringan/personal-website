import React from "react";

const Footer = ({
  email = "mayas.saringan@gmail.com",
  github = "https://github.com/MayaSaringan",
}) => (
  <footer className="site-footer">
    <span>
      Contact me at <a href={`mailto:${email}`}>{email}</a>
    </span>
    <br />
    <span>
      or follow me on <a href={github}>Github</a>!
    </span>
    <p>
      Site was partially made with{" "}
      <a href={"https://www.cursor.com/"}>Cursor AI</a>
    </p>
  </footer>
);

export default Footer;
