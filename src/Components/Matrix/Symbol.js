import React, { Component } from "react";
import chars from "./chars.json";

export default class Symbol extends Component {
  state = { char: this.getRandomChar() };

  componentWillMount() {
    if (this.props.primary || Math.random() > 0.95) {
      this.makeSymbolDynamic();
    }
  }

  getRandomChar() {
    return chars[Math.floor(Math.random() * chars.length)];
  }

  makeSymbolDynamic() {
    setInterval(() => {
      this.setState({ char: this.getRandomChar() });
    }, 550);
  }

  render() {
    const { primary, opacity } = this.props;
    return (
      <div
        className={"symbol " + (primary ? "primary" : "")}
        style={{ opacity }}
      >
        {this.state.char}
      </div>
    );
  }
}
