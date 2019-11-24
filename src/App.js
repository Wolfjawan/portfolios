import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routs";
import "./App.css";
export default () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};
