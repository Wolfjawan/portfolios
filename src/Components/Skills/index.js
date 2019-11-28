import React, { Component } from "react";
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
        <div className="terminal">
          <div className="terminal-nav">
            <p className="ml-2 text-success">Terminal: home/mohsen/skills</p>
            <div className="terminal-nav-items">
              <i className="fas fa-window-minimize text-success"></i>
              <i className="far fa-window-maximize text-success"></i>
              <i className="fas fa-window-close text-danger"></i>
            </div>
          </div>
          <div className="container">
            <h1>SKILLS</h1>
            <hr className="background-green" />
            <div>
              <h2>Front-End Developer</h2>
              <ul>
                <li>
                  <i>
                    <img src={HTML} alt="HTML" width="100px" />
                  </i>
                  <p>HTML</p>
                </li>
                <li>
                  <i>
                    <img src={CSS} alt="CSS" width="75px" />
                  </i>
                  <p>CSS</p>
                </li>
                <li>
                  <i>
                    <img src={JS} alt="JS" width="100px" />
                  </i>
                  <p>JavaScript</p>
                </li>
                <li>
                  <i>
                    <img src={ReactLogo} alt="React" width="100px" />
                  </i>
                  <p>REACT</p>
                </li>
                <li>
                  <i>
                    <img src={ReactNative} alt="ReactNative" width="100px" />
                  </i>
                  <p>ReactNative</p>
                </li>
                <li>
                  <i>
                    <img src={BootStrap} alt="BootStrap" width="100px" />
                  </i>
                  <p>BootStrap</p>
                </li>
                <li>
                  <i>
                    <img src={ReactStrap} alt="ReactStrap" width="100px" />
                  </i>
                  <p>ReactStrap</p>
                </li>
              </ul>
              <h2>Back-End Developer</h2>
              <ul>
                <li>
                  <i>
                    <img src={JS} alt="JS" width="100px" />
                  </i>
                  <p>JavaScript</p>
                </li>
                <li>
                  <i>
                    <img src={Nodejs} alt="Nodejs" width="100px" />
                  </i>
                  <p>NODE.JS</p>
                </li>
                <li>
                  <i>
                    <img src={ExpressJS} alt="ExpressJS" width="100px" />
                  </i>
                  <p>Node Express</p>
                </li>
                <li>
                  <i>
                    <img src={Python} alt="Python" width="100px" />
                  </i>
                  <p>Python</p>
                </li>
              </ul>
              <h2>DevOps</h2>
              <ul>
                <li>
                  <i>
                    <img src={Kubernetes} alt="Kubernetes" width="100px" />
                  </i>
                  <p>Kubernetes</p>
                </li>
                <li>
                  <i>
                    <img src={Docker} alt="Docker" width="100px" />
                  </i>
                  <p>Docker</p>
                </li>
                <li>
                  <i>
                    <img src={AWS} alt="AWS" width="100px" />
                  </i>
                  <p>AWS</p>
                </li>
              </ul>
              <h2>Other Skills</h2>
              <ul>
                <li>
                  <i>
                    <img src={MongoDb} alt="mongoDB" width="100px" />
                  </i>
                  <p>MongoDB</p>
                </li>
                <li>
                  <i>
                    <img src={SQL} alt="SQL" width="100px" />
                  </i>
                  <p>PostgreSQL</p>
                </li>
                <li>
                  <i>
                    <img src={CSharp} alt="C#" width="100px" />
                  </i>
                  <p>C#</p>
                </li>
                <li>
                  <i>
                    <img src={JWT} alt="jwt" width="100px" />
                  </i>
                  <p>Token</p>
                </li>
                <li>
                  <i>
                    <img src={GitHub} alt="GitHub" width="100px" />
                  </i>
                  <p>GitHub</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
