import React, { Component } from "react";
import EmailLogo from "../../images/email.png";
import GitHub from "../../images/github.png";
import LinkedIn from "../../images/linkedIn.png";
import { pageHeight } from "../Helpers";
import Terminal from "../terminal";

import "./index.css";

class Contact extends Component {
  render() {
    const { aStyle } = this.props;
    return (
      <div
        className="mohsen-contact container"
        style={{ minHeight: pageHeight }}
        id="contact"
      >
        <Terminal
          {...this.props}
          link="Terminal: home/mohsen/contact"
          Component={() => (
            <div className="container">
              <h1>CONTACT</h1>
              <hr style={this.props.hrStyle} />
              <div>
                <h2 style={this.props.h2BorderStyle} className="pl-0 pb-2 mb-3">
                  <a
                    style={{ ...aStyle }}
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
                <h2 style={this.props.h2BorderStyle} className="pl-0 pb-2 mb-3">
                  <a
                    style={{ ...aStyle }}
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
                <h2 style={this.props.h2BorderStyle} className="pl-0 pb-2 mb-3">
                  <a
                    style={{ ...aStyle }}
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
          )}
        />
      </div>
    );
  }
}

export default Contact;
