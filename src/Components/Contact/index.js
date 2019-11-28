import React, { Component } from "react";
import EmailLogo from "../../images/email.png";
import GitHub from "../../images/github.png";
import LinkedIn from "../../images/linkedIn.png";
import { pageHeight } from "../Helpers";
import "./index.css";

class Contact extends Component {
  render() {
    return (
      <div
        className="mohsen-contact container"
        style={{ minHeight: pageHeight }}
        id="contact"
      >
        <div className="terminal">
          <div className="terminal-nav">
            <p className="ml-2 text-success">Terminal: home/mohsen/contact</p>
            <div className="terminal-nav-items">
              <i className="fas fa-window-minimize text-success"></i>
              <i className="far fa-window-maximize text-success"></i>
              <i className="fas fa-window-close text-danger"></i>
            </div>
          </div>
          <div className="container">
            <h1>CONTACT</h1>
            <hr className="background-green" />
            <div>
              <h2 className="pl-0 pb-2 mb-3">
                <a
                  href="mailto:mohsen@codeyourfuture.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i>
                    <img src={EmailLogo} alt="EmailLogo" width="80px" />
                  </i>
                  mohsen@codeyourfuture.io
                </a>
              </h2>
              <h2 className="pl-0 pb-2 mb-3">
                <a
                  href="https://github.com/Wolfjawan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ml-2 mr-2">
                    <img src={GitHub} alt="GitHub" width="60px" />
                  </i>
                  github.com/Wolfjawan
                </a>
              </h2>
              <h2 className="pl-0 pb-2 mb-3">
                <a
                  href="https://www.linkedin.com/in/mohsen-moradi-01853b16a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ml-2 mr-2">
                    <img src={LinkedIn} alt="LinkedIn" width="60px" />
                  </i>
                  LinkedIn Page
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
