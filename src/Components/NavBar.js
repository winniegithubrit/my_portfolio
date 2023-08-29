import React from "react";
import {Link} from 'react-router-dom';
import "../App.css";

function NavBar() {
  return <div className="navbar">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/education">Education</Link>
      </li>
      <li>
        <Link to="/skills">Skills</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="experience">Experience</Link>
      </li>
    </ul>
   
    </div>;
}

export default NavBar;