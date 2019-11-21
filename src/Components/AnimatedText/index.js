import React, { Component } from "react";
import messages from "./messages.json";
import { applyAnimation } from "./AnimateText";
import "./index.css";
const text = messages[Math.floor(Math.random() * messages.length)];
class Index extends Component {
  componentWillMount() {
    setTimeout(() => {
      applyAnimation("MESSAGE");
    }, 100 * text.length);
    this.props.showRouts(100 * text.length + text.length * 100);
  }
  render() {
    return (
      <div className="Message-container">
        <div className="MessageWrapper">
          <h1 id="MESSAGE" className="Message">
            {text}
          </h1>
        </div>
      </div>
    );
  }
}

export default Index;
