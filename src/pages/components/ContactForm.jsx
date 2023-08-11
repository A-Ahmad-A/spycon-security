import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Form.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phoneNumber: '',
    address: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    // Configure Email.js service parameters
    const serviceId = 'service_66so7hd';
    const templateId = 'template_et11cat';
    const userId = 'FFn0cwJBRojiLigIk';   
    try {
      await emailjs.sendForm(serviceId, templateId, event.target, userId);
      setStatusMessage('Email sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: '',
        phoneNumber: '',
        address: '',
      });

      // Clear the status message after 3 seconds (adjust as needed)
      setTimeout(() => {
        setStatusMessage('');
      }, 3000); // 3000 milliseconds = 3 seconds
    } catch (error) {
      console.error('Error sending email:', error);
      setStatusMessage('Failed to send email. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="contactFormHeading">Contact us</h2>
      <div className="displayflex">
        <label>Name <span>*</span></label>
        <input
          placeholder="Enter your name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="displayflex">
        <label>Email <span>*</span></label>
        <input
          className="inputfield"
          placeholder="Enter your email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="displayflex">
        <label>Phone Number</label>
        <input
          placeholder="Your personal number"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
      </div>
      <div className="displayflex">
        <label>Message <span>*</span></label>
        <textarea
          placeholder="Write your queries"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>
      <div className="buttonDIV">
        <button className="formButton" type="submit">Send</button>
      </div>
      <p className="statusMessage">{statusMessage}</p>
    </form>
  );
};

export default ContactForm;

