import React, { Component } from "react";
import About from "../Components/About";
import Experience from "../Components/Experience";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Education from "../Components/Education";
import Contact from "../Components/Contact";
class Home extends Component {
  render() {
    return (
      <div>
        <About {...this.props} />
        <hr style={this.props.hrStyle} />
        <Experience {...this.props} />
        <hr style={this.props.hrStyle} />
        <Projects {...this.props} />
        <hr style={this.props.hrStyle} />
        <Skills {...this.props} />
        <hr style={this.props.hrStyle} />
        <Education {...this.props} />
        <hr style={this.props.hrStyle} />
        <Contact {...this.props} />
      </div>
    );
  }
}

export default Home;
