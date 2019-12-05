import React, { Component } from "react";
import Routes from "./Routs";
import { darkMode, whiteMode } from "./modesStyle";
// import Matrix from "./Components/Matrix";
import "./App.css";
class App extends Component {
  state = {
    faceMode: ""
  };
  UNSAFE_componentWillMount() {
    const faceMode = localStorage.getItem("face-mode");
    if (faceMode) {
      this.setState({ faceMode });
      return this.darkModeHandler(faceMode);
    } else {
      this.darkModeHandler("dark");
      localStorage.setItem("face-mode", "dark");
    }
  }
  darkModeHandler = faceMode => {
    if (faceMode === "dark") {
      this.setState({ ...darkMode, faceMode });
      return localStorage.setItem("face-mode", faceMode);
    } else {
      this.setState({ ...whiteMode, faceMode });
      return localStorage.setItem("face-mode", faceMode);
    }
  };
  render() {
    return (
      <div>
        {/* <Matrix /> */}
        <Routes {...this.state} darkModeHandler={this.darkModeHandler} />
      </div>
    );
  }
}

export default App;
