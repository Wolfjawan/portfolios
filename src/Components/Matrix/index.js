import React from "react";
import _ from "lodash";
import { oppositeNumber, shuffle, symbols } from "./Helper";
import "./index.css";

let w = window.innerWidth;

const timesMatrix = () => {
  const matrix = [];
  var i;
  for (i = 0; i < w / 50; i++) {
    const fontSize = _.random(10, 40);
    matrix.push(
      <pre
        style={{
          fontSize: `${fontSize}px`,
          animationDelay: `${fontSize / 10}s`,
          animationDuration: `${oppositeNumber(fontSize) + 10}s`
        }}
      >
        {shuffle(symbols)}
        <span>X</span>
      </pre>
    );
  }
  return matrix;
};
export default () => <section className="matrix">{timesMatrix()}</section>;
