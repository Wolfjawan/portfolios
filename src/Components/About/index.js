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
                My fascination with technology was sparked when I was a child, I
                thought it would be a great idea to help one of my cousin who
                was fixing electrical things like Radio cassette player or Game
                Consoles. Where after a while start opening my own Classic Mini
                Game Console. Although it was dangerous but still want it to
                open it and see how it works. I found really interesting how
                society affected by technology so fast and still growing. If you
                speak of a fully autonomous AI robot that can feel things, some
                people might say - are you crazy, are you living in movies. We
                are living a stage where anything is possible with technology
                and this is because what computers can do at the moment,
                problem-solving, doing a huge amount of math and calculation
                very fast. There are robots that can fix Rubik's cube in a
                second.
              </p>
              <hr className="background-green" />
              <div className="about-mohsen-images">
                <a href={ME} target="_blank" rel="noopener noreferrer">
                  <img src={ME} alt="mohsen" width="100%" height="100%" />
                  <p>This is Mohsen -> CYF-Office 2019</p>
                </a>
                <a href={CYF} target="_blank" rel="noopener noreferrer">
                  <img src={CYF} alt="mohsen" width="100%" height="100%" />
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
