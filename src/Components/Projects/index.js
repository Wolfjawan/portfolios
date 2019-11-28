import React, { Component } from "react";
import Project from "./Project";
import "./index.css";

class Projects extends Component {
  render() {
    return (
      <div className="mohsen-projects container" id="projects">
        <div className="terminal">
          <div className="terminal-nav">
            <p className="ml-2 text-success">Terminal: home/mohsen/projects</p>
            <div className="terminal-nav-items">
              <i className="fas fa-window-minimize text-success"></i>
              <i className="far fa-window-maximize text-success"></i>
              <i className="fas fa-window-close text-danger"></i>
            </div>
          </div>
          <div className="container">
            <h1>PROJECTS</h1>
            <hr className="background-green" />
            <div>
              <Project />
              <h2>Other Projects</h2>
              <ul>
                <li>
                  <a
                    href="https://github.com/Wolfjawan/UK_Petrol"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github-square"></i> UK Petrol - Collage
                    Project - C#
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/CodeYourFuture/cyf-forms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github-square"></i> CYF - Volunteers
                    form - JS, React, Bootstrap, ReactStrap
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Wolfjawan/the-Millennium-Centre"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github-square"></i> The Millennium
                    Centre - JS, React, Bootstrap, Node.js, Node Express
                  </a>
                </li>
              </ul>
              <h2>Projects for fun</h2>
              <ul>
                <li>
                  <a
                    href="https://github.com/Wolfjawan/S-R-P"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github-square"></i> Raspberry-pi -
                    Simple server - Python
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Wolfjawan/matrix"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github-square"></i> background Matrix -
                    HTML, CSS,JS, React
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Wolfjawan/Calculatore"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github-square"></i> Calculator - C#
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
