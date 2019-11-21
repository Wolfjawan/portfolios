import React, { Component } from "react";
import Symbol from "./Symbol";
import _ from "lodash";

const SYMBOL_HEIGHT = 35;
const SYMBOL_WIDTH = 18;

export default class Code extends Component {
  state = {
    codeLength: 0,
    yPosition: 0,
    xPosition: 0,
    transition: "",
    transform: ""
  };

  UNSAFE_componentWillMount() {
    const scaleRatio = _.random(0.8, 1.8);
    const minCodeHeight = _.round(window.innerHeight / SYMBOL_HEIGHT);
    const codeLength = _.random(minCodeHeight, minCodeHeight * 2);
    const yPosition = (codeLength + 2) * SYMBOL_HEIGHT * scaleRatio * 2;
    const stepCount = _.round((window.innerWidth - 20) / SYMBOL_WIDTH);
    const xPosition = _.random(0, stepCount) * SYMBOL_WIDTH;
    const transition = `top linear ${_.random(13, 18) / scaleRatio}s`;
    const transform = `scale(${scaleRatio})`;
    this.setState({ codeLength, yPosition, xPosition, transition, transform });
  }
  componentDidMount() {
    const startTime = _.random(10, 20);
    setTimeout(() => {
      const newHeight = window.innerHeight + this.state.yPosition;
      this.setState({ yPosition: -newHeight });
    }, startTime);
  }

  render() {
    const {
      yPosition,
      xPosition,
      transition,
      transform,
      codeLength
    } = this.state;
    const code = _.times(codeLength).map((x, i) => (
      <Symbol key={i + x} opacity={i <= 5 ? i / 5 : 1} />
    ));
    const styles = {
      left: xPosition,
      top: -yPosition,
      transition,
      transform
    };
    return (
      <div className="code" style={styles}>
        {code}
        <Symbol primary="true" />
      </div>
    );
  }
}
