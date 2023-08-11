import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./ServicesSlidesShow.css";
import dog from "../serviceImages/Dog.jpg";
import mannedGuarding from "../serviceImages/mannedGuarding.jpeg";
import patroling from "../serviceImages/Patroling.jpg";
import firealarm from "../serviceImages/fireman.jpg";
import constructionSite2 from "../serviceImages/constructionSite2.jpg";
import cctvMonitor from "../serviceImages/CCTVmONITOR.jpg";
import camera from "../serviceImages/cameraService.jpg";

import "@fontsource/poppins";
import "@fontsource/poppins/400.css";

const Slider = () => {
  const slideRef = useRef(null);

  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };

  const handleSeeMoreClick = (item) => {
    const portionDiv = document.getElementById(item.did);
    portionDiv.scrollIntoView({ behavior: "smooth" });
  };

  const data = [
    {
      id: 1,
      imgUrl: mannedGuarding,
      desc: "Unwavering protection with our professional Manned Guarding services",
      name: "Manned Guarding",
      did: "p1",
      details:
        "Our highly trained security team ensures top-notch protection for your premises. As a trusted security partner, we prioritize a secure environment for your business. With tailored manned guarding services, gain peace of mind and confidence in the safety of your operations",
    },
    {
      id: 2,
      imgUrl: patroling,
      desc: "Comprehensive Mobile Patrol & Key Holding for round-the-clock security",
      name: "Mobile Patrol & Key Holding",
      did: "p2",
      details:
        "At SPYCON SECURITY, our comprehensive mobile patrol and key holding service ensures round-the-clock protection for your premises. With highly trained security professionals, prompt response to alarms, and customized patrol schedules, we offer peace of mind and reliable security for your property and assets. Trust us to keep you safe and secure",
    },
    {
      id: 3,
      imgUrl: dog,
      desc: "Trusted Canine Security: Unparalleled protection with NASDU Approved Handlers",
      name: "Canine Security",
      did: "p3",
      details:
        "Welcome to SPYCON SECURITY, where our NASDU Approved Canine Security Handlers set us apart. Our skilled team provides cost-effective, proactive security solutions you can trust. With exceptional canine capabilities, we prioritize safety to deliver maximum peace of mind for your premises",
    },
    {
      id: 4,
      imgUrl: constructionSite2,
      desc: "Robust Construction Site Security: Protecting your project with expert vigilance",
      name: "Construction Site Security",
      did: "p4",
      details:
        "At SPYCON SECURITY, we provide comprehensive security solutions for construction sites, including manned guarding, K9 units, and CCTV monitoring. Our experienced and fully vetted security officers conduct thorough assessments to identify vulnerabilities and tailor strategies for maximum protection",
    },
    {
      id: 5,
      imgUrl: camera,
      desc: "Advanced CCTV Installation: Enhancing surveillance for ultimate peace of mind",
      name: "Cctv Installation",
      did: "p5",
      details:
        "Choose Spycon Security for expert CCTV installation services tailored to your needs, whether short-term or long-term. Our professional assessment ensures the perfect setup for your premises. Rest easy with our rapid response to alarms, providing top-notch surveillance with state-of-the-art technology. Your security is our priority.",
    },
    {
      id: 6,
      imgUrl: cctvMonitor,
      desc: "24/7 CCTV Monitoring: Your vigilant security partner, always on watch",
      name: "24/7 Cctv Monitoring",
      did: "p6",
      details:
        "Experience top-notch CCTV monitoring with Spycon Security. Our state-of-the-art Monitoring Centre and highly trained operators ensure constant watch and swift response. Trust our reputable team for personalized security solutions. Your safety is paramount with Spycon Security - your trusted partner in safeguarding your property and assets.",
    },
    {
      id: 7,
      imgUrl: firealarm,
      desc: "Reliable Fire Alarm Testing: Ensuring Constant Vigilance",
      name: "Fire Alarm Testing And Installation",
      did: "p7",
      details:
        "Protecting what matters most: Discover unwavering fire alarm testing with our trusted team, ensuring round-the-clock vigilance for your safety and peace of mind. Count on us as your steadfast guardian in fire prevention.we stand as your unwavering guardian, meticulously monitoring and inspecting your system to ensure constant vigilance.",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      handleClickNext();
    }, 5000); // Change the time here to set the interval in milliseconds (5 seconds in this case)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div id="slide" ref={slideRef}>
          {data.map((item) => (
            <div
              key={item.id}
              className="item"
              style={{ backgroundImage: `url(${item.imgUrl})` }}
              
            >
              <div className="content">
                <div className="name">{item.name}</div>
                <div className="des">{item.desc}</div>
                <button className={"seemoreDiv"}
                  onClick={() => handleSeeMoreClick(item)}
                >
                  See more
                </button>
                <div className="buttons">
          <button id="prev" onClick={handleClickPrev}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button id="next" onClick={handleClickNext}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
              </div>
            </div>
          ))}
        </div>
     
      </div>
      <div style={{ marginTop: "0px" }}></div>

      <div className="servicesWrapper">
        <div className="ourservicesWrapper">
          {" "}
          <h1 className="ourServices"> Our Services</h1>
        </div>

        <div className="scroll">
          {data.map((item) => (
            <div id={item.did} key={item.id} className="servicesMain">
              <h1 className="serviceH">{item.name}</h1>
              <p className="serviceP">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
