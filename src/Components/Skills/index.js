import React, { Component } from "react";
import Terminal from "../terminal";
import MongoDb from "../../images/mongodb.png";
import JWT from "../../images/jwt.png";
import CSharp from "../../images/cSharp.png";
import SQL from "../../images/sql.png";
import ReactNative from "../../images/reactnative.png";
import ReactLogo from "../../images/react.png";
import HTML from "../../images/html.png";
import CSS from "../../images/css.png";
import JS from "../../images/js.png";
import BootStrap from "../../images/bootStrap.png";
import ReactStrap from "../../images/ReactStrap.png";
import Nodejs from "../../images/nodejs.png";
import ExpressJS from "../../images/expressjs.png";
import Python from "../../images/Python.png";
import Kubernetes from "../../images/Kubernetes.png";
import Docker from "../../images/Docker.png";
import AWS from "../../images/AWS.png";
import GitHub from "../../images/github.png";
import "./index.css";

class Skills extends Component {
  render() {
    return (
      <div className="mohsen-skills container" id="skills">
        <Terminal
          {...this.props}
          link="Terminal: home/mohsen/skills"
          Component={() => (
            <div className="container">
              <h1>SKILLS</h1>
              <hr style={this.props.hrStyle} />
              <div>
                <h2 style={this.props.h2BorderStyle}>Front-End Developer</h2>
                <ul>
                  <li>
                    <a
                      style={{ ...this.props.aStyle }}
                      href="https://html.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <img src={HTML} alt="HTML" width="100px" />
                      </i>
                      <p>HTML</p>
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ ...this.props.aStyle }}
                      href="https://www.w3schools.com/css/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <img src={CSS} alt="CSS" width="75px" />
                      </i>
                      <p>CSS</p>
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ ...this.props.aStyle }}
                      href="https://www.javascript.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <img src={JS} alt="JS" width="100px" />
                      </i>
                      <p>JavaScript</p>
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ ...this.props.aStyle }}
                      href="https://reactjs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <img src={ReactLogo} alt="React" width="100px" />
                      </i>
                      <p>REACT</p>
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ ...this.props.aStyle }}
                      href="https://facebook.github.io/react-native/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <img
                          src={ReactNative}
                          alt="ReactNative"
                          width="100px"
                        />
                      </i>
                      <p>ReactNative</p>
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ ...this.props.aStyle }}
                      href="https://getbootstrap.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <img src={BootStrap} alt="BootStrap" width="100px" />
                      </i>
                      <p>BootStrap</p>
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ ...this.props.aStyle }}
                      href="https://reactstrap.github.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <img src={ReactStrap} alt="ReactStrap" width="100px" />
                      </i>
                      <p>ReactStrap</p>
                    </a>
                  </li>
                </ul>
                <h2 style={this.props.h2BorderStyle}>Back-End Developer</h2>
                <ul>
                  <li>
                    <a
                      style={{ ...this.props.aStyle }}
                      href="https://www.w3schools.com/js/default.asp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <img src={JS} alt="JS" width="100px" />
                      </i>
                      <p>JavaScript</p>
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ ...this.props.aStyle }}
                      href="https://nodejs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <img src={Nodejs} alt="Nodejs" width="100px" />
                      </i>
                      <p>NODE.JS</p>
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ ...this.props.aStyle }}
                      href="https://expressjs.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <img src={ExpressJS} alt="ExpressJS" width="100px" />
                      </i>
                      <p>Express.JS</p>
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ ...this.props.aStyle }}
                      href="https://www.python.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <img src={Python} alt="Python" width="100px" />
                      </i>
                      <p>Python</p>
                    </a>
                  </li>
                </ul>
                <h2 style={this.props.h2BorderStyle}>DevOps</h2>
                <ul>
                  <li>
                    <a
                      style={{ ...this.props.aStyle }}
                      href="https://kubernetes.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <img src={Kubernetes} alt="Kubernetes" width="100px" />
                      </i>
                      <p>Kubernetes</p>
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ ...this.props.aStyle }}
                      href="docker.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <img src={Docker} alt="Docker" width="100px" />
                      </i>
                      <p>Docker</p>
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ ...this.props.aStyle }}
                      href="https://aws.amazon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <img src={AWS} alt="AWS" width="100px" />
                      </i>
                      <p>AWS</p>
                    </a>
                  </li>
                </ul>
                <h2 style={this.props.h2BorderStyle}>Other Skills</h2>
                <ul>
                  <li>
                    <a
                      style={{ ...this.props.aStyle }}
                      href="https://www.mongodb.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <img src={MongoDb} alt="mongoDB" width="100px" />
                      </i>
                      <p>MongoDB</p>
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ ...this.props.aStyle }}
                      href="https://www.postgresql.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <img src={SQL} alt="SQL" width="100px" />
                      </i>
                      <p>PostgreSQL</p>
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ ...this.props.aStyle }}
                      href="https://docs.microsoft.com/en-us/dotnet/csharp/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <img src={CSharp} alt="C#" width="100px" />
                      </i>
                      <p>C#</p>
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ ...this.props.aStyle }}
                      href="https://jwt.co.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <img src={JWT} alt="jwt" width="100px" />
                      </i>
                      <p>Token</p>
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ ...this.props.aStyle }}
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <img src={GitHub} alt="GitHub" width="100px" />
                      </i>
                      <p>GitHub</p>
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

export default Skills;
