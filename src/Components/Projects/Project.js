import React, { Component, Fragment } from "react";
import CYF_Dashboard from "../../images/CYF-dashboard.png";
import CYF_applicationProcess from "../../images/CYF-application-process.png";
import TMC from "../../images/TMC.JPG";
import UKLTD from "../../images/UKLTD.JPG";

class projects extends Component {
  render() {
    return (
      <Fragment>
        <div className="mohsen-projects-images">
          <div className="mohsen-projects-box-container">
            <div className="mohsen-projects-box">
              <img src={CYF_Dashboard} alt="CODEYOURFUTURE - ADMIN DASHBOARD" />
              <span>
                <a
                  style={{ ...this.props.aStyle }}
                  href="http://dashboard.codeyourfuture.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5> CYF - ADMIN DASHBOARD</h5>
                </a>
                <ul>
                  <li>
                    <i className="fab fa-js-square"></i> - JavaScript
                  </li>
                  <li>
                    <i className="fab fa-html5"></i> - HTML - Front-end
                  </li>
                  <li>
                    <i className="fab fa-css3-alt"></i> - CSS
                  </li>
                  <li>
                    <i className="fab fa-react"></i> - React
                  </li>
                  <li>
                    <i className="fab fa-bootstrap"></i> - bootstrap
                  </li>
                  <li>
                    <i className="fab fa-react"></i> - ReactStrap
                  </li>
                  <li>
                    <i className="fab fa-node"></i> - NODE.js - Back-end
                  </li>
                  <li>
                    <i className="fab fa-node-js"></i> - Express
                  </li>
                  <li>
                    <i className="fas fa-smile-wink"></i> - JWT - Token
                  </li>
                  <li>
                    <i className="fas fa-database"></i> - Mongo-DB - Database
                  </li>
                </ul>
                <p style={{ fontSize: "14px" }}>
                  ADMIN DASHBOARD is a project where mentors can manage applicants data
                  and work.
                </p>
              </span>
              <ul className="icon">
                <li>
                  <a
                    style={{ ...this.props.aStyle }}
                    href="http://dashboard.codeyourfuture.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-search"></i>
                  </a>
                </li>
                <li>
                  <a
                    style={{ ...this.props.aStyle }}
                    href="https://github.com/CodeYourFuture/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github-square"></i>
                  </a>
                </li>
              </ul>
              <p>CYF - ADMIN DASHBOARD</p>
            </div>
          </div>
          <div className="mohsen-projects-box-container">
            <div className="mohsen-projects-box">
              <img
                src={CYF_applicationProcess}
                alt="CODEYOURFUTURE - APPLICATION PROCESS"
              />
              <span>
                <a
                  style={{ ...this.props.aStyle }}
                  href="https://application-process.codeyourfuture.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5> CYF - APPLICATION PROCESS </h5>
                </a>
                <ul>
                  <li>
                    <i className="fab fa-js-square"></i> - JavaScript
                  </li>
                  <li>
                    <i className="fab fa-html5"></i> - HTML - Front-end
                  </li>
                  <li>
                    <i className="fab fa-css3-alt"></i> - CSS
                  </li>
                  <li>
                    <i className="fab fa-react"></i> - React
                  </li>
                  <li>
                    <i className="fab fa-bootstrap"></i> - bootstrap
                  </li>
                  <li>
                    <i className="fab fa-react"></i> - Reactstrap
                  </li>
                  <li>
                    <i className="fab fa-node"></i> - NODE.js - Back-end
                  </li>
                  <li>
                    <i className="fab fa-node-js"></i> - Express
                  </li>
                  <li>
                    <i className="fas fa-smile-wink"></i> - JWT - Token
                  </li>
                  <li>
                    <i className="fas fa-database"></i> - Mongo-DB - Database
                  </li>
                </ul>
                <p style={{ fontSize: "14px" }}>
                  Application Process is a project for new applicants to gain
                  the basics skills and get ready to join CodeYourFuture course.
                </p>
              </span>
              <ul className="icon">
                <li>
                  <a
                    style={{ ...this.props.aStyle }}
                    href="https://application-process.codeyourfuture.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-search"></i>
                  </a>
                </li>
                <li>
                  <a
                    style={{ ...this.props.aStyle }}
                    href="https://github.com/CodeYourFuture/application-process"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github-square"></i>
                  </a>
                </li>
              </ul>
              <p>CYF - APPLICATION PROCESS</p>
            </div>
          </div>
        </div>
        {/* collage projects */}
        <div className="mohsen-projects-images">
          <div className="mohsen-projects-box-container">
            <div className="mohsen-projects-box">
              <img src={TMC} alt="CODEYOURFUTURE - ADMIN DASHBOARD" />
              <span>
                <h5>The Millennium Centre</h5>
                <ul>
                  <li>
                    <i className="fab fa-js-square"></i> - JavaScript
                  </li>
                  <li>
                    <i className="fab fa-html5"></i> - HTML
                  </li>
                  <li>
                    <i className="fab fa-css3-alt"></i> - CSS
                  </li>
                  <li>
                    <i className="fab fa-react"></i> - React
                  </li>
                  <li>
                    <i className="fab fa-bootstrap"></i> - bootstrap
                  </li>
                  <li>
                    <i className="fab fa-node"></i> - NODE.js - Back-end
                  </li>
                  <li>
                    <i className="fab fa-node-js"></i> - Express
                  </li>
                </ul>
                <p style={{ fontSize: "14px" }}>
                  Millennium Centre - Educational project in collage
                </p>
              </span>
              <ul className="icon">
                <li>
                <a
                    style={{ ...this.props.aStyle }}
                    href="https://github.com/Wolfjawan/the-Millennium-Centre"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <i className="fa fa-search"></i>
                  </a>
                </li>
                <li>
                  <a
                    style={{ ...this.props.aStyle }}
                    href="https://github.com/Wolfjawan/the-Millennium-Centre"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github-square"></i>
                  </a>
                </li>
              </ul>
              <p>Collage project - The Millennium Centre</p>
            </div>
          </div>
          <div className="mohsen-projects-box-container">
            <div className="mohsen-projects-box">
              <img
                src={UKLTD}
                alt="CODEYOURFUTURE - APPLICATION PROCESS"
              />
              <span>
                <a
                  style={{ ...this.props.aStyle }}
                  href="https://github.com/Wolfjawan/UK_Petrol"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5> Collage project - Petroleum UK Ltd </h5>
                </a>
                <ul>
                  <li>
                    <i>C#</i> - Microsoft Visual Studio C#
                  </li>
                </ul>
                <p style={{ fontSize: "14px" }}>
                Petroleum UK Ltd - Educational project in collage 
                </p>
              </span>
              <ul className="icon">
                <li>
                  <a
                    style={{ ...this.props.aStyle }}
                    href="https://github.com/Wolfjawan/UK_Petrol"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-search"></i>
                  </a>
                </li>
                <li>
                  <a
                    style={{ ...this.props.aStyle }}
                    href="https://github.com/Wolfjawan/UK_Petrol"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github-square"></i>
                  </a>
                </li>
              </ul>
              <p>Collage project - Petroleum UK Ltd</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default projects;
