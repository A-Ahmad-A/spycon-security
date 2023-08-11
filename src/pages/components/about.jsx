import flag from "../images/pngegg(5).png";
import React from "react";
import "./About.css";
import "@fontsource/poppins";
import "@fontsource/poppins/700.css";

const about = () => {
  return (
    <div className="wrapper">
      <div className="bluePortion">
        <div className="blueportionData">
          <h1 className="blueportionHeading">Spycon Security</h1>

          <h2 className="blueportionDetails">
            {" "}
            <span
              className="movingText"
              style={{ color: "black", fontFamily: "cursive" }}
            >
              We Can
            </span>
          </h2>
        </div>
      </div>

      <div className="yellowportion">
        <div className="whatwedo">
          <h1 className="detailH">what we do</h1>
          <p className="detailP">
            At Spycon Security, we specialize in providing top-notch private
            security solutions tailored to meet the unique needs of small
            businesses, construction sites, and various industries. Our
            dedicated team of experienced security professionals is committed to
            ensuring the safety and protection of your assets, personnel, and
            property.
          </p>

          <h1 className="detailH">Our values</h1>
          <p className="detailP">
            <span className="span2">Integrity:</span> We uphold the highest
            ethical standards in all our interactions. Honesty, transparency,
            and trustworthiness are the cornerstones of our business
          </p>
          <p className="detailP">
            <span className="span2"> Excellence: </span> We are dedicated to
            delivering unparalleled excellence in every aspect of our services.
            From our personnel to our technology, we are committed to setting
            new standards of quality
          </p>
          <p className="detailP">
            <span className="span2">Safety:</span> The safety of our clients and
            their assets is our utmost priority. We go above and beyond to
            ensure a secure environment that fosters peace of mind.
          </p>

          <h1 className="detailH">Why Choose us</h1>
          <p className="detailP">
            <span className="span2">Customized Solutions:</span> We understand
            that every client is unique. Our solutions are tailored to address
            your specific security needs and concerns
          </p>
          <p className="detailP">
            <span className="span2"> 24/7 Availability:</span> Security concerns
            can arise at any time. Our team is available around the clock to
            ensure your safety
          </p>
          <p className="detailP">
            <span className="span2">Proven Track Record:</span> Our track record
            speaks for itself. We have successfully safeguarded businesses,
            construction sites, and events, earning the trust of numerous
            clients
          </p>
        </div>

        <div className="ceo">
          <h1
            className="detailH"
            style={{ fontSize: "25px", flexWrap: "wrap" }}
          >
            Message from Director
          </h1>
          <p className="ceoMessage">
            Security is more than just locks and cameras; it's about trust,
            vigilance, and a relentless dedication to safeguarding what matters
            most. At Spycon Security, our mission is clear: to provide you with
            the peace of mind you deserve
          </p>
          <p className="ceoMessage">
            we remain grounded in the values of integrity, excellence, and
            collaboration. We don't just offer security services; we offer
            trust, reliability, and a promise to stand by your side, ensuring
            your and well-being and sefety
          </p>
          <p className="ceoMessage">
            I invite you to explore our comprehensive security solutions, learn
            about our dedicated team, and discover how we can be your partners
            in protection. Thank you for considering SpyconSecurity as your
            trusted security provider
          </p>
          <p className="ceoMessage">Wishing you safety and success</p>
          <p className="ceoMessage">Zain </p>
        </div>
      </div>
    </div>
  );
};

export default about;
