import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Screens/Home";
import Resume from "../Screens/Resume";
import NotFound from "../Components/NotFound";
import MoDraftJS from "../projects/modraftjs";
class Routs extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Layout exact path="/" component={Home} {...this.props} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/modraftjs" component={MoDraftJS} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routs;
