import React from "react";
import { Route } from "react-router-dom";
import Navbar from "../Components/Nav";
import TopPage from "../Components/TopPage";

export default ({ component: Component, mainStyle, ...rest }) => (
  <Route
    {...rest}
    render={() => {
      return (
        <div className="main-container" style={mainStyle}>
          <section
            style={{
              color: "#1b242f",
              position: "relative"
            }}
          >
            <TopPage {...rest} />
            <Navbar {...rest} />
          </section>
          <div className="main">
            <Component {...rest} />
          </div>
        </div>
      );
    }}
  />
);
