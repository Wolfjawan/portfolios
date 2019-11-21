import React from "react";
import { Route } from "react-router-dom";
import Navbar from "../Components/Nav";
export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return (
        <div className="main-container">
          <Navbar {...props} />
          <div className="main">
            <Component {...props} />
          </div>
        </div>
      );
    }}
  />
);
