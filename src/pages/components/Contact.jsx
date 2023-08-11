import Form from "./ContactForm.jsx";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your actual EmailJS service credentials
    const serviceID = "service_y872t1p";
    const templateID = "template_qibl4wq";
    const userID = "J8Whzf9DyCRb6v94Q";

    const templateParams = {
      to_email: "aliahmadazhar4420@gmail.com", // Replace with your desired email address
      from_email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setSent(true);
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => console.error("Failed to send the email:", error));
  };
  const Map = (props) => {
    const { mapWithoutFilter } = props;
    return (
        <div div
            className="mapsIframe"
            style={mapWithoutFilter ? { filter: 'none' } : undefined
            }
        >
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.3906866416064!2d-1.5199343032104462!3d52.4177184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774b678bc0523f%3A0x83ed91dadbe450ab!2sEllys%20Court%2C%20Ellys%20Road!5e0!3m2!1sen!2s!4v1691599832472!5m2!1sen!2s"
        
                width="100%"
                height="100%"
                loading="lazy"
            />
        </div >
    );
}


  return (
    <div style={{width:"100%"  , paddingTop: "0px"}}>
      <div style={{height:"50px" , backgroundColor:"#E6E6E6" , 
  width: "calc(min(1920px, calc(100%) - 60px))" , marginInline:"auto"}}></div>
    <div className="contact-form">
      <div className="mainDIV">
        <h1 className="contactHeading">Connect with Spycon Security</h1>
        
      </div>
      <div className="formanddetails">
    
      <div className="location">
                        <h1 className="H1" style={{marginTop:"0px !important"}}>Headquarters</h1>
                        <p className="p1">Coventry city centre, CV1</p>
                        <h2 className="H2">Email</h2>
                        <p className="p1"style={{ color: "#0086FF" }}>contact@spyconsecurity.co.uk</p>
                       

                         <Map mapWithoutFilter />
      </div>
      <Form></Form>
      </div>
          </div>

    </div>
  );
};

export default ContactForm;
