import React, { Component } from "react";
import Terminal from "../terminal";
import "./index.css";

class Experience extends Component {
  render() {
    return (
      <div className="mohsen-experience container" id="experience">
        <Terminal
          {...this.props}
          link="Terminal: home/mohsen/experience"
          Component={() => (
            <div className="container">
              <h1>EXPERIENCE</h1>
              <hr style={this.props.hrStyle} />
              <div>
                <h2 style={this.props.h2BorderStyle}>
                  Technical Lead, Code Your Future 2017 (Oct) - Present
                </h2>
                <ul>
                  <li>
                    Create fullstack applications for staff, volunteers and
                    students.
                  </li>
                  <li>
                    Utilised various Amazon Web Services (AWS) including EC2,
                    S3, SES, SNS.
                  </li>
                  <li>
                    Work closely with the CTO on technical architecture and
                    strategy.
                  </li>
                  <li>Work closely with lead designer on the new features.</li>
                  <li>
                    Plan User Testing sessions and funnel feedback for frontend
                    changes.
                  </li>
                  <li>
                    Help onboard new members of team including mentors and
                    graduates to the team.
                  </li>
                  <li>
                    Support and plan for the CYF work experience programme (over
                    10 graduates).
                  </li>
                  <li>Deploy applications using Kubernetes on AWS.</li>
                </ul>

                <h2 style={this.props.h2BorderStyle}>
                  Full Stack Engineer, Inclusive Labs 2018 (May) - Present.
                </h2>
                <ul>
                  <li>
                    JavaScript development using React with Redux, and Node
                    (ES8) with Express.
                  </li>
                  <li>
                    Built various prototypes for new projects using React Native
                    for mobile and JS or Python backend.
                  </li>
                  <li>
                    Experience with using and managing Postgres DB and Mongo DB.
                  </li>
                  <li>
                    DevOps using Docker and Kubernetes, Mongo DB management,
                    Continuous integration and delivery using Circle CI.
                  </li>
                  <li>
                    Responsible for creating and managing infrastructure
                    resources on Amazon Web Services (AWS).
                  </li>
                  <li>
                    Responsible for delivery and presenting a number of internal
                    and external projects to clients.
                  </li>
                  <li>
                    Created documentation and processes for various projects.
                  </li>
                </ul>
                <h2 style={this.props.h2BorderStyle}>
                  Work Experience, Code Your Future, 2018 (Jan) - Present.
                </h2>
                <ul>
                  <li>
                    Created new prototype application to process applicants for
                    CYF.
                  </li>
                  <li>Contributed to various full stack projects.</li>
                  <li>
                    Utilized best practices for clean code and architecture.
                  </li>
                  <li>Mentored new graduates by pair programming.</li>
                </ul>
                <h2 style={this.props.h2BorderStyle}>
                  Mobile Services and support engineering, Owner.
                </h2>
                <ul>
                  <li>Started a new business to service mobile phones.</li>
                  <li>
                    Provided various support to repair hardware and software
                    issues.
                  </li>
                  <li>Upgrade software to improve quality and security.</li>
                </ul>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default Experience;
