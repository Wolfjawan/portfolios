import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="markdown-body entry-content pl-5 pr-5">
        <h1>Mohsen Moradi</h1>
        <p>
          T: 07402120069 / E:{" "}
          <a
            href="mailto:mohsen@codeyourfuture.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            mohsen@codeyourfuture.io
          </a>{" "}
          / G:{" "}
          <a
            href="https://github.com/Wolfjawan"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Page
          </a>{" "}
          / L:{" "}
          <a
            href="https://www.linkedin.com/in/mohsen-moradi-01853b16a"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Page
          </a>
        </p>
        <p>
          I would like to use the latest technology to solve real problems in
          AI, Robotics and Health sector
        </p>
        <div>
          <div className="m-3">
            <h1>Experience</h1>
            <p>
              <strong>Technical Lead</strong>, <strong>Code Your Future</strong>{" "}
              2017 (Oct) - Present
            </p>
            <ul>
              <li>
                Create fullstack applications for staff, volunteers and students
              </li>
              <li>
                Utilised various Amazon Web Services (AWS) including EC2, S3,
                SES, SNS
              </li>
              <li>
                Work closely with the CTO on technical architecture and strategy
              </li>
              <li>Work closely with lead designer on the new features</li>
              <li>
                Plan User Testing sessions and funnel feedback for frontend
                changes
              </li>
              <li>
                Help onboard new members of team including mentors and graduates
                to the team
              </li>
              <li>
                Support and plan for the CYF work experience programme (over 10
                graduates)
              </li>
              <li>Deploy applications using Kubernetes on AWS</li>
            </ul>

            <p>
              <strong>Full Stack Engineer</strong>,{" "}
              <strong>Inclusive Labs</strong> 2018 (May) - Present
            </p>
            <ul>
              <li>
                JavaScript development using React with Redux, and Node (ES8)
                with Express
              </li>
              <li>
                Built various prototypes for new projects using React Native for
                mobile and JS or Python backend
              </li>
              <li>
                Experience with using and managing Postgres DB and Mongo DB
              </li>
              <li>
                DevOps using Docker and Kubernetes, Mongo DB management,
                Continuous integration and delivery using Circle CI
              </li>
              <li>
                Responsible for creating and managing infrastructure resources
                on Amazon Web Services (AWS)
              </li>
              <li>
                Responsible for delivery and presenting a number of internal and
                external projects to clients
              </li>
              <li>Created documentation and processes for various projects</li>
            </ul>
            <p>
              <strong>Work Experience</strong>,{" "}
              <strong>Code Your Future</strong>, 2018 (Jan) - Present
            </p>
            <ul>
              <li>
                Created new prototype application to process applicants for CYF
              </li>
              <li>Contributed to various full stack projects</li>
              <li>Utilised best practices for clean code and architecture</li>
              <li>Mentored new graduates by pair programming</li>
            </ul>
            <p>
              <strong>Mobile Services and support engineering</strong>,{" "}
              <strong>Owner</strong>
            </p>
            <ul>
              <li>Started a new business to service mobile phones</li>
              <li>
                Provided various support to repair hardware and software issues
              </li>
              <li>Upgrade software to improve quality and security</li>
            </ul>
            <hr />
          </div>
          <div className="m-3">
            <h1>Education</h1>
            <h4>
              Code Your Future <em>Full stack Web Development</em>
            </h4>
            <p>
              <strong>2017 (September) - 2018 (May)</strong>
            </p>
            <p>Modules covering full stack web development including:</p>
            <ul>
              <li>HTML, CSS, Bootstrap, Material UI</li>
              <li>Core programming skills using JS/Node</li>
              <li>React</li>
              <li>React native</li>
              <li>Node</li>
              <li>SQL and Mongo DB</li>
              <li>Essential DevOps workshops</li>
            </ul>
            <h4>
              B&amp;D College <em>Higher Education IT</em>
            </h4>
            <p>
              <strong>2019 (January) - 2019 (June)</strong>
            </p>
            <ul>
              <li>Core programming using C#</li>
              <li>Introduction to security, crypto and networking</li>
              <li>Essential Web development</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
