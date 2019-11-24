import React from "react";
import SingleLine from "./SingleLine";
import "./index.css";
import _ from "lodash";
let w = window.innerWidth;
const Matrix = () => (
  <div className="Matrix">
    {_.times(w/60).map(i => (
      <SingleLine key={i} />
    ))}
  </div>
);

export default Matrix;
