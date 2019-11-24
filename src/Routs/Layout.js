import React from "react";
import { Route } from "react-router-dom";
import Navbar from "../Components/Nav";
import TopPage from "../Components/TopPage";

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return (
        <div className="main-container">
          <section
            style={{
              color: "#1b242f",
              position: "relative"
            }}
          >
            <TopPage />
            <Navbar {...props} />
          </section>
          <div className="main">
            <Component {...props} />
          </div>
        </div>
      );
    }}
  />
);
