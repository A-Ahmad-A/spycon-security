import React from "react";
import Slideshow from "./components/SlideShow";
import constructionSite from "./images/pexels-engin-akyurt-1463917.jpg";
import camera from "./images/pexels-mateusz-feliksik-13422379.jpg";
import darkBuilding from "./images/darkBuilding.jpg";
import security from "../pages/images/portrait-male-security-guard-with-uniform.jpg";
import pinkmamn from "./images/pinkmen.jpg"
import "./Home.css";
import "@fontsource/poppins";
import "@fontsource/poppins/400.css";

const App = () => {
  const images = [ darkBuilding, pinkmamn , constructionSite, camera];

  return (
    <div>
      <Slideshow className="hideSlideShow" images={images} />
    <div className="homeWrapper">
    <div className="MainDiv">
        <img className="mainDivImg" src={security} />
        <div className="homeSecondDiv">
          <h1 className="headingH" >
            Experienced individuals proficient in providing{" "}
            <span> security services </span>
          </h1>

          <h2 className="description">
            Safeguarding British Enterprises: We are your trusted ally, offering
            advanced security solutions that incorporate state-of-the-art
            technology, guaranteeing the well-being and tranquility of
            businesses throughout the United Kingdom.
          </h2>

          <h2 className="description">
            Within the United Kingdom, we operate a 24/7 control room dedicated
            to delivering prompt and responsive emergency security guard
            services.
          </h2>
          <a className="linkToServices">SEE ALL SERVICES </a>
        </div>
      </div>

      <div className="div2">
        <h1 className="heading2">
          We take pride in serving clients across a wide range of sectors
        </h1>
        <h1 className="details">
          {" "}
          At our esteemed organization, we take immense pride in catering to
          clients from diverse sectors. Our commitment to excellence and
          adaptability allows us to extend our services to meet the unique needs
          and requirements of a broad spectrum of industries. From corporate
          enterprises to educational institutions, healthcare facilities to
          retail establishments, and beyond, we stand ready to provide top-notch
          solutions tailored to each sector's distinct challenges and
          objectives.
        </h1>
      </div>
    </div>
    </div>
  );
};

export default App;
