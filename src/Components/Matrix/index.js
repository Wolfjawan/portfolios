import React from "react";
import Code from "./Code";
import "./index.css";
import _ from "lodash";

const Matrix = () => (
  <div className="Matrix">
    {_.times(10).map(i => (
      <Code key={i} />
    ))}
  </div>
);

export default Matrix;
