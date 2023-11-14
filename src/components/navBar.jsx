import React from "react";
import { Link, NavLink } from "react-router-dom";
import Home from "./home";
const NavBar = ({ user }) => {
  return (
    <header className="d-flex justify-content-center py-3">
      <div className="container-fluid">
        <div className="container" id="navbarNav">
          <ul className="nav">
            <li className="nav-item ">
              <NavLink
                className="nav-link text-warning-emphasis"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link text-warning"
                aria-current="page"
                to="/about"
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-warning" to={"/portfolio"}>
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-warning" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
