import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Screens/Home";
import NotFound from "../Components/NotFound";
import Layout from "./Layout";
class Routs extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Layout exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routs;
