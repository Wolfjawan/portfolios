import React, { Component } from "react";
import Symbol from "./Symbol";
import _ from "lodash";
const SYMBOL_HEIGHT = 20;
const SYMBOL_WIDTH = 20;

export default class SingleLine extends Component {
  state = {
    singleLineLength: 0,
    yPosition: 0,
    xPosition: 0,
    transition: "",
    transform: ""
  };

  UNSAFE_componentWillMount() {
    const scaleRatio = _.random(0.8, 2);
    const minSingleLineHeight = window.innerHeight / SYMBOL_HEIGHT;

    const singleLineLength = _.random(
      minSingleLineHeight,
      minSingleLineHeight * 2
    );
    const yPosition = (singleLineLength + 2) * SYMBOL_HEIGHT * scaleRatio * 2;
    const stepCount = (window.innerWidth - 60) / SYMBOL_WIDTH;
    const xPosition = _.random(0, stepCount) * SYMBOL_WIDTH;
    const transition = `top linear ${30 / scaleRatio}s`;
    const transform = `scale(${scaleRatio})`;
    this.setState({
      singleLineLength,
      yPosition,
      xPosition,
      transition,
      transform
    });
  }
  componentDidMount() {
    const startTime = _.random(10, 100);
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
      singleLineLength
    } = this.state;
    const SingleLine = _.times(singleLineLength).map((x, i) => (
      <Symbol key={i + x} opacity={i <= 5 ? i / 5 : 1} />
    ));
    const styles = {
      left: xPosition,
      top: -yPosition,
      transition,
      transform
    };
    return (
      <div className="single-line" style={styles}>
        {SingleLine}
        <Symbol primary="true" />
      </div>
    );
  }
}
