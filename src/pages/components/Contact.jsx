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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77874.94119930077!2d-1.597318984029658!3d52.414071897488675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877490ec442deb7%3A0xdb07ee97a461af89!2sCoventry%20Building%20Society%2C%20Coventry%20City%20Centre!5e0!3m2!1sen!2s!4v1691772710462!5m2!1sen!2s"   width="100%"
                height="100%"
                loading="lazy"
            />
        </div >
    );
}


  return (
    <div style={{width:"100%"  , paddingTop: "0px" }}>
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
                        <p className="p1"style={{ color: "#0086FF" }}>info@spyconsecurity.co.uk</p>
                       

                         <Map mapWithoutFilter />
      </div>
      <Form></Form>
      </div>
          </div>

    </div>
  );
};

export default ContactForm;
