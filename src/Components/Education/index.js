import React, { Component } from "react";
import { pageHeight } from "../Helpers";

import "./index.css";

class Education extends Component {
  render() {
    return (
      <div
        className="mohsen-education container"
        style={{ minHeight: pageHeight }}
        id="education"
      >
        <div className="terminal">
          <div className="terminal-nav">
            <p className="ml-2 text-success">Terminal: home/mohsen/education</p>
            <div className="terminal-nav-items">
              <i className="fas fa-window-minimize text-success"></i>
              <i className="far fa-window-maximize text-success"></i>
              <i className="fas fa-window-close text-danger"></i>
            </div>
          </div>
          <div className="container">
            <h1>EDUCATION</h1>
            <hr className="background-green" />
            <div>
              <h2>
                Code Your Future <em>Full stack Web Development</em>
              </h2>
              <p>
                <strong>2017 (September) - 2018 (May)</strong>
              </p>
              <li>Modules covering full stack web development including:</li>
              <ul>
                <li>HTML, CSS, Bootstrap, Material UI.</li>
                <li>Core programming skills using JS/Node.</li>
                <li>React.</li>
                <li>Node.</li>
                <li>SQL and Mongo DB.</li>
                <li>Essential DevOps workshops.</li>
              </ul>
              <h2>
                B&amp;D College <em>Higher Education IT</em>
              </h2>
              <p>
                <strong>2019 (January) - 2019 (June)</strong>
              </p>
              <ul>
                <li>Core programming using C#.</li>
                <li>
                  Introduction to robotics, security, crypto and networking.
                </li>
                <li>Essential Web development.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
