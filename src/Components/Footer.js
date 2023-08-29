import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faInstagram,
  faSnapchat,
  faTiktok,

} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="Footer">
      <a href="https://twitter.com/WinnieJomo" className="twitter">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/winniejomo/"
        className="instagram"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://github.com/winniegithubrit" className="github">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <a href="https://www.snapchat.com/winnie_jomo21" className="snapchat">
        <FontAwesomeIcon icon={faSnapchat} size="2x" />
      </a>
      <a href="https://www.tiktok.com/@jomo_winnie?lang=en" className="tiktok">
        <FontAwesomeIcon icon={faTiktok} size="2x" />
      </a>
    </div>
  );
}

export default Footer;
