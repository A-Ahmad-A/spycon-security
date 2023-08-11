import React from "react";
import "./Footer.css";
import logo from "../images/plainLogo.png";
import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import goals from "../images/goals.png";
import safe from "../images/safecontractor.png";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="dispayColumn">
          <h1 className="footerHeading">Company</h1>

          <Link to="/about" className="flinks">
            <h1 className="footerL">About</h1>
          </Link>
          <Link to="/" className="flinks">
            <h1 className="footerL">Home</h1>
          </Link>
          <Link to="/services" className="flinks">
            <h1 className="footerL">Services</h1>
          </Link>
          <Link to="/contact" className="flinks">
            <h1 className="footerL">Contact us</h1>
          </Link>
          
        </div>

        <div className="dispayColumn">
        <h1 className="footerHeading">Address</h1>
          <p>Coventry city centre, CV1</p>
          
          <h1 className="footerHeading">Contact us</h1>
          <p>
            Email :{" "}
            <span className="blueText">info@spyconsecurity.co.uk </span>{" "}
          </p>
        
        </div>

        <div style={{display:"flex", flexDirection:"column"}}>
        <h1 className="footerHeading">Certifications</h1>
          <img src={goals} className="footerLogoservices" />
          <img src={safe} style={{marginTop:"10px"}}className="footerLogoservices" />
        </div>
      </div>    
      <div className="bottomLine">
      <Link to="/" className="flinks">
      <img src={logo} className="footerLogo" />
          </Link>
        <p>
          &copy; {new Date().getFullYear()} SpyconSecurity. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
