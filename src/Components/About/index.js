import React, { Component } from "react";
import CYF from "../../images/CYF.JPG";
import ME from "../../images/ME.jpg";

import "./index.css";

class About extends Component {
  render() {
    return (
      <div className="about-mohsen container" id="about">
        <div className="terminal">
          <div className="terminal-nav">
            <p className="ml-2 text-success">Terminal: home/mohsen/about</p>
            <div className="terminal-nav-items">
              <i className="fas fa-window-minimize text-success"></i>
              <i className="far fa-window-maximize text-success"></i>
              <i className="fas fa-window-close text-danger"></i>
            </div>
          </div>
          <div className="container">
            <h1>ABOUT</h1>
            <hr className="background-green" />
            <div>
              <h2>
                I would like to use the latest technology to solve real problems
                in AI, Robotics and Health sector.
              </h2>
              <p>
                My fascination with technology was sparked when I was a child. I
                thought it would be a great idea to help one of my cousins who
                was fixing electrical items like Radio cassette player and Game
                Consoles. Although it was dangerous, I still wanted to see how
                they worked. I find it really interesting how society is
                affected by technology. The change is fast and getting quicker.
                If you speak about fully autonomous AI robots that can feel
                things, some people might ask - are you crazy, are you living in
                movies. We are living in the age where advances in computers and
                technology made possible what was once impossible. There are
                robots that can solve a Rubik's cube in a second.
              </p>
              <hr className="background-green" />
              <div className="about-mohsen-images">
                <a href={ME} target="_blank" rel="noopener noreferrer">
                  <img src={ME} alt="mohsen" width="100%" height="90%" />
                  <p>This is Mohsen -> CYF-Office 2019</p>
                </a>
                <a href={CYF} target="_blank" rel="noopener noreferrer">
                  <img src={CYF} alt="mohsen" width="100%" height="90%" />
                  <p>CYF - Scotland 2019</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
