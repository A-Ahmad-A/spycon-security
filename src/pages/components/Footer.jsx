import React from "react";
import "./Footer.css";
import logo from "../images/plainLogo.png";
import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import goals from "../images/goals.png";
import safe from "../images/safecontractor.png";
import ico from "../images/ico.png";
import { FaInstagram } from "react-icons/fa";
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
            <span className="blueText">info@spyconsecurity.co.uk </span>{" "}
          </p>
         
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 className="footerHeading">Services</h1>
          <Link to="/services" className="flinks">
            <h1 className="footerL">Fire alarm testing and installation</h1>
          </Link>

          <Link to="/servies" className="flinks">
            <h1 className="footerL">Mobile patrol & key holding</h1>
          </Link>
          <Link to="/servies" className="flinks">
            <h1 className="footerL">Construction site security</h1>
          </Link>

          <Link to="/services" className="flinks">
            <h1 className="footerL">Cctv installation</h1>
          </Link>
          <Link to="/services" className="flinks">
            <h1 className="footerL">24/7 Cctv monitoring</h1>
          </Link>
          <Link to="/servies" className="flinks">
            <h1 className="footerL">Manned guarding</h1>
          </Link>
          <Link to="/services" className="flinks">
            <h1 className="footerL">Canine Security</h1>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: "10px" }} className="bottomLineservices">
        <div>
          {" "}
          <h1 className="footerserviceheading">
            Our accreditations and certifications to signify our quality of work
          </h1>
        </div>

        <div className="certifications">
          <img src={goals} className="footerLogoservices" />
          <img
            src={safe}
            style={{ marginTop: "10px", marginBottom: "8px" }}
            className="footerLogoservices"
          />
          <img
            src={ico}
            style={{ marginTop: "10px", marginBottom: "8px" }}
            className="footerLogoservices"
          />
        </div>
      </div>
      <div className="bottomLine">
        <Link to="/" className="flinks">
          <img src={logo} className="footerLogo" />
        </Link>
        <div className="socialAccounts">
          <p>
            &copy; {new Date().getFullYear()} SpyconSecurity. All rights
            reserved.
          </p>
          <a
            href="https://instagram.com/spycon_security?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-icon-container"
          >
            <FaInstagram className="instagram-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
