import React, { useState, useEffect } from "react";
import "./slideshow.css"; // Import the CSS file for styling (Slideshow.css)

import { Link} from "react-router-dom";
import "@fontsource/poppins";
import "@fontsource/poppins/400.css";

const Slideshow = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      setIsTransitioning(false);
    }, 1000); // Change image after 1000ms (adjust as needed for the fade-out and fade-in effect)
  };

  useEffect(() => {
    const interval = setInterval(() => nextImage(), 3000); // Start the slideshow every 3 seconds (adjust as needed)
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    if (!isTransitioning) {
      setCurrentImage(index);
    }
  };

  return (
    <div className="slideshow-container">
      <div className="imagedetails">
        <h1 className="imgHeading">SPYCON SECURITY</h1>
        <h2 className="imgDetails">WE CAN</h2>
        <Link to="contact" className="flinks">
        <h2 className="button">CONTACT</h2>
          </Link>
      </div>
      {images.map((image, index) => (
        <img

          key={index}
          className={`slideshow-img ${index === currentImage ? "active" : ""} ${
            isTransitioning ? "transition" : ""
          }`}
          
          style={{ opacity: index === currentImage ? 1 : 0 }}
          src={image}
          alt={`Image ${index + 1}`}
        />
      ))}
      <div className="dot-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImage ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
