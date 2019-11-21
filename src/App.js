import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routs";
import Matrix from "./Components/Matrix";
// import AnimatedText from "./Components/AnimatedText";
import "./App.css";
class App extends Component {
  state = { matrix: true, text: false, routs: false };
  componentWillMount() {
    setTimeout(() => {
      this.setState({ text: true });
    }, 6000);
    setTimeout(() => {
      this.setState({ matrix: false, routs: true, text: false });
    }, 12000);
  }
  render() {
    const { matrix, text, routs } = this.state;
    return (
      <Router>
        <div>
          {text && (
            <div className="first-message-container">
              <h3>
                Loading Mohsen...[<span className="text-success"> OK </span>]...
              </h3>
            </div>
          )}
          {matrix && (
            <div className="first-message-container">
              <h3>
                Matrix Loading...[<span className="text-success"> OK </span>]...
              </h3>
            </div>
          )}
          {matrix && <Matrix />}
          {matrix && <Matrix />}
          {routs && <Routes />}
        </div>
      </Router>
    );
  }
}

export default App;
