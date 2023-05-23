import React from "react";

import TMDB_LOGO from "/src/assets/icon/tmdb-logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="dev">
        <h4 className="info">Design and Code</h4>
        <a
          className="dev-name"
          href="https://github.com/AmirHosssein-J"
          target="_blank"
        >
          AmirHossein Jafari
        </a>
      </div>
      <div className="tmdb">
        <h5 className="title">Powered By</h5>
        <a href="https://www.themoviedb.org/" target="_blank">
          <img src={TMDB_LOGO} alt="tmdb logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
