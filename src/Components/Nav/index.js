import React from "react";
import { Link } from "react-router-dom";
import { scrollAnimation } from "../Helpers";
import "./index.css";

window.onscroll = () => {
  scrollAnimation();
};

const Navbar = (props) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={props.navbarStyle}
      id="navbar"
    >
      <span
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ border: `1px solid ${props.aStyle.color}` }}
      >
        <i
          className="fas fa-bars"
          style={{ fontSize: "25px", ...props.aStyle }}
        ></i>
      </span>
      <span
        onClick={() =>
          props.darkModeHandler(
            props.faceMode === "dark" ? "white" : "dark"
          )
        }
        className="pointer display-mode-media"
        style={{ padding: "3px 3px 0 0" }}
      >
        {props.faceMode === "dark" ? (
          <i
            className="fas fa-sun"
            style={{ color: "#fff", fontSize: "25px" }}
          />
        ) : (
          <i
            className="fas fa-moon"
            style={{ color: "#000", fontSize: "25px" }}
          />
        )}
      </span>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul
          className="navbar-nav container"
          style={props.navbarNavStyle}
        >
          <li className="nav-item active">
            <a
              style={props.aStyle}
              className="nav-link"
              href="#top-page"
            >
              HOME <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a style={props.aStyle} className="nav-link" href="#about">
              ABOUT
            </a>
          </li>
          <li className="nav-item active">
            <a
              style={props.aStyle}
              className="nav-link"
              href="#experience"
            >
              EXPERIENCE
            </a>
          </li>
          <li className="nav-item active">
            <a
              style={props.aStyle}
              className="nav-link"
              href="#projects"
            >
              PROJECTS
            </a>
          </li>
          <li className="nav-item active">
            <a style={props.aStyle} className="nav-link" href="#skills">
              SKILLS
            </a>
          </li>
          <li className="nav-item active">
            <a
              style={props.aStyle}
              className="nav-link"
              href="#education"
            >
              EDUCATION
            </a>
          </li>
          <li className="nav-item active">
            <a style={props.aStyle} className="nav-link" href="#contact">
              CONTACT
            </a>
          </li>
          <li className="nav-item active">
            <Link style={props.aStyle} className="nav-link" to="/resume">
              RESUME
            </Link>
          </li>
          <span
            onClick={() =>
              props.darkModeHandler(
                props.faceMode === "dark" ? "white" : "dark"
              )
            }
            className="pointer display-mode-desktop"
            style={{ padding: "3px" }}
          >
            {props.faceMode === "dark" ? (
              <i
                className="fas fa-sun"
                style={{ color: "#fff", fontSize: "30px" }}
              />
            ) : (
              <i
                className="fas fa-moon"
                style={{ color: "#000", fontSize: "30px" }}
              />
            )}
          </span>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
