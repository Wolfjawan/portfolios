import React, { Component } from "react";
import { pageHeight } from "../Helpers";
import Terminal from "../terminal";
import "./index.css";

class Education extends Component {
  render() {
    return (
      <div
        className="mohsen-education container"
        style={{ minHeight: pageHeight }}
        id="education"
      >
        <Terminal
        {...this.props}
          link="Terminal: home/mohsen/education"
          Component={() => (
            <div className="container">
              <h1>EDUCATION</h1>
              <hr style={this.props.hrStyle} />
              <div>
                <h2 style={this.props.h2BorderStyle}>
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
                <h2 style={this.props.h2BorderStyle}>
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
          )}
        />
      </div>
    );
  }
}

export default Education;
