import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => (
  <nav className="navbar custom-navbar">
    <div className="navbar-content">
      <div className="navbar-logo">
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="Rock's Fitness"
            className="logo-img"
          />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/map" className="nav-link">
            FIND A GYM
          </Link>
        </li>
        <li>
          <Link to="/why-join" className="nav-link">
            WHY JOIN
          </Link>
        </li>
        <li>
          <Link to="/franchise" className="nav-link">
            FRANCHISE
          </Link>
        </li>
        <li>
          <Link to="/training" className="nav-link">
            TRAINERS
          </Link>
        </li>
        <li>
          <Link to="/blog" className="nav-link">
            BLOG
          </Link>
        </li>
        <li>
          <Link to="/careers" className="nav-link">
            CAREERS
          </Link>
        </li>
      </ul>
      <div className="navbar-button">
        <Link to="/register" className="btn free-trial-btn">
          TRY US FOR FREE
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
