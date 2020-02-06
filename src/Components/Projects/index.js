import React, { Component } from "react";
import { Link } from "react-router-dom";
import Project from "./Project";
import Terminal from "../terminal";
import "./index.css";

class Projects extends Component {
  render() {
    const { aStyle } = this.props;
    return (
      <div className="mohsen-projects container" id="projects">
        <Terminal
          {...this.props}
          link="Terminal: home/mohsen/projects"
          Component={() => (
            <div className="container">
              <h1>PROJECTS</h1>
              <hr style={this.props.hrStyle} />
              <div>
                <Project aStyle={aStyle} />
                <h2 style={this.props.h2BorderStyle}>Other Projects</h2>
                <ul>
                  <li>
                    <a
                      style={{ ...aStyle, marginRight: "10px" }}
                      href="https://github.com/Wolfjawan/modraftjs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github-square"></i> Rich text editor
                      "modraftjs" based on draft.js
                    </a>
                    <Link style={{ ...aStyle }} to="/modraftjs">
                      Demo
                    </Link>
                  </li>
                  <li>
                    <a
                      style={{ ...aStyle }}
                      href="https://github.com/Wolfjawan/UK_Petrol"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github-square"></i> UK Petrol -
                      Collage Project - C#
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ ...aStyle }}
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
                      style={{ ...aStyle }}
                      href="https://github.com/Wolfjawan/the-Millennium-Centre"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github-square"></i> The Millennium
                      Centre - JS, React, Bootstrap, Node.js, Node Express
                    </a>
                  </li>
                </ul>
                <h2 style={this.props.h2BorderStyle}>Projects for fun</h2>
                <ul>
                  <li>
                    <a
                      style={{ ...aStyle }}
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
                      style={{ ...aStyle }}
                      href="https://github.com/Wolfjawan/matrix"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github-square"></i> background Matrix
                      - HTML, CSS,JS, React
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ ...aStyle }}
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
          )}
        />
      </div>
    );
  }
}

export default Projects;
