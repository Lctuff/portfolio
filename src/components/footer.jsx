import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-warning  d-flex justify-content-center ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.instagram.com/logan_chew51/"
            >
              {" "}
              <img src="images/instagram.svg" alt="Instagram" width={30} />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://twitter.com/LoganLogantuff">
              <img src="images/twitter.svg" alt="Twitter" width={30} />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.facebook.com/logan.chew.5"
            >
              <img src="images/facebook.svg" alt="Facebook" width={30} />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/Lctuff">
              <img src="images/github.svg" alt="Github" width={30} />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Footer;
