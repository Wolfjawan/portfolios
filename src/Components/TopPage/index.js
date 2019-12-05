import React, { Component } from "react";
import Terminal from "../terminal";
import "./index.css";
let h = window.innerHeight;
let w = window.innerWidth;
class TopPage extends Component {
  state = { lMatrix: true, text: false, message: false };

  UNSAFE_componentWillMount() {
    setTimeout(() => {
      this.setState({ text: true, lMatrix: false });
    }, 3000);
    setTimeout(() => {
      this.setState({ message: true, text: false });
    }, 5500);
  }
  render() {
    const { text, message, lMatrix } = this.state;
    const terminalHeight = w > 600 ? `${h / 3 + 50}px` : `${h / 3 + 100}px`;
    const terminalWidth = w > 600 ? `${w / 3 + 200}px` : `100%`;
    const topPagePaddingTop = `${h / 3 - 100}`;
    const topPagePaddingLeft = `${w / 3 - 100}`;
    const padding =
      w > 600
        ? `${topPagePaddingTop}px 0 0 ${topPagePaddingLeft}px`
        : "20px 10px 0 10px";
    return (
      <div
        className="flex top-page"
        id="top-page"
        style={{
          height: `${h}px`,
          padding
        }}
      >
        <Terminal
          {...this.props}
          link="Terminal: home/mohsen"
          style={{
            height: terminalHeight,
            width: terminalWidth
          }}
          Component={() => (
            <div>
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
                    <a href="#about" className="text-success font-weight-bold">
                      {" "}
                      Mohsen Moradi
                    </a>
                    .
                    <br /> He is a full-stock web-developer.
                  </h3>
                  <span className="view-work-btn">
                    <a href="#about" className="btn btn-outline-success btn-lg">
                      View Mohsen Moradi
                      <i className="fas fa-arrow-down pl-2" />
                    </a>
                  </span>
                </div>
              )}
            </div>
          )}
        />
      </div>
    );
  }
}

export default TopPage;
