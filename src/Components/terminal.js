import React from "react";
import "./index.css";
export default ({
  Component,
  link,
  style,
  terminalNavStyle,
  terminalStyle,
  ...props
}) => (
  <div
    className="terminal"
    style={{ ...style, ...terminalStyle }}
    id="terminal"
  >
    <div className="terminal-nav" style={{ ...terminalNavStyle }}>
      <p className="ml-2">{link}</p>
      <div className="terminal-nav-items">
        <i className="fas fa-window-minimize text-success"></i>
        <i className="far fa-window-maximize text-success"></i>
        <i className="fas fa-window-close text-danger"></i>
      </div>
    </div>
    <div className="container">
      <Component {...props} />
    </div>
  </div>
);
