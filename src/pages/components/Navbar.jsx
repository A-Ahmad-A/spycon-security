import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/plainLogo.png";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Eczar:wght@500&family=Proza+Libre&display=swap');
</style>
const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu after selecting an option
  };

  return (
    <div className="navBarWrapper">
      <nav className="navbar">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/" className="flinks">
            <img className={`logo logo-img`} src={logo} alt="Logo" />
          </Link>
          <Link to="/" className="flinks">
            <h1 className="logoheading">SPYCON SECURITY</h1>
          </Link>
        </div>
        <div
          className={`burger ${isMenuOpen ? "open" : ""}`}
          onClick={handleMenuToggle}
        >
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link
              to="/"
              className={`nav-button ${
                location.pathname === "/" ? "active" : ""
              }`}
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`nav-button ${
                location.pathname === "/services" ? "active" : ""
              }`}
              onClick={handleLinkClick}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`nav-button ${
                location.pathname === "/about" ? "active" : ""
              }`}
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`nav-button ${
                location.pathname === "/contact" ? "active" : ""
              }`}
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
