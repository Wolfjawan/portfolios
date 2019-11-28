import React from "react";
// import { Link } from "react-router-dom";
import { scrollAnimation } from "../Helpers";
import "./index.css";

window.onscroll = () => {
  scrollAnimation();
};
class Navbar extends React.Component {
  state = { showSlider: false };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav container">
            <li className="nav-item active">
              <a className="nav-link" href="#top-page">
                HOME <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#about">
                ABOUT
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#experience">
                EXPERIENCE
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#projects">
                PROJECTS
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#skills">
                SKILLS
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#education">
                EDUCATION
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#contact">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
