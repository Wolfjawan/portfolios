import React from "react";
import { Link } from "react-router-dom";
import { scrollAnimation } from "../Helpers";
import "./index.css";

window.onscroll = () => {
  scrollAnimation();
};
class Navbar extends React.Component {
  state = { showSlider: false };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <span className="sr-only">(current)</span>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
