import React, { Component } from "react";
import Matrix from "../Matrix";
import "./index.css";
let h = window.innerHeight;
let w = window.innerWidth;
class TopPage extends Component {
  state = { matrix: true, lMatrix: true, text: false, message: false };
  componentWillMount() {
    setTimeout(() => {
      this.setState({ text: true, lMatrix: false });
    }, 5000);
    setTimeout(() => {
      this.setState({ message: true, text: false });
    }, 9000);
    setTimeout(() => {
      this.setState({ matrix: false });
    }, 25000);
  }
  render() {
    const { matrix, text, message, lMatrix } = this.state;
    const terminalHeight =w > 600 ? `${h / 3 + 50}px`: `${h / 3+100}px`;
    const terminalWidth = w > 600 ? `${w / 3 + 200}px` : `100%`;
    const topPagePaddingTop = `${h / 3 - 100}`;
    const topPagePaddingLeft = `${w / 3 - 100}`;
    const padding =
      w > 600
        ? `${topPagePaddingTop}px 0 0 ${topPagePaddingLeft}px`
        : "20px 10px 0 10px";
    return (
      <div
        className="flex"
        id="top-page"
        style={{
          height: `${h}px`,
          padding
        }}
      >
        <div
          className="terminal"
          style={{
            height: terminalHeight,
            width: terminalWidth
          }}
        >
          <div className="terminal-nav">
            <p className="ml-2 text-success">Terminal</p>
            <div className="terminal-nav-items">
              <i class="fas fa-window-minimize text-success"></i>
              <i class="far fa-window-maximize text-success"></i>
              <i class="fas fa-window-close text-danger"></i>
            </div>
          </div>
          {lMatrix && (
            <div className="first-message-container">
              <h4>
                Loading Matrix...[<span className="text-success"> OK </span>
                ]...
              </h4>
            </div>
          )}
          {text && (
            <div className="first-message-container">
              <h4>
                Loading Mohsen...[<span className="text-success"> OK </span>
                ]...
              </h4>
            </div>
          )}
          {message && (
            <div className="second-message-container">
              <h3>
                Hello, this is
                <strong className="text-success"> Mohsen Moradi</strong>.
                <br /> He is a full-stock web-developer.
              </h3>
              <span className="view-work-btn">
                <a href="#navbar" class="btn btn-outline-success btn-lg">
                  View his Work
                  <i class="fas fa-arrow-down pl-2" />
                </a>
              </span>
            </div>
          )}
        </div>
        {matrix && <Matrix />}
      </div>
    );
  }
}

export default TopPage;
