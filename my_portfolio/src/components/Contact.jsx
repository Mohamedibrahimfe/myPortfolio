import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "../assets/css/Contact.css";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Initialize EmailJS with your user ID
  useEffect(() => {
    emailjs.init("iVuI5El7T8zS4Tebx"); // Replace 'your_user_id' with your actual user ID from EmailJS
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Use EmailJS to send the form data
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID, // Replace with your service ID
        process.env.REACT_APP_TEMPLATE_ID, // Replace with your template ID
        e.target, // The form element
        process.env.REACT_APP_USER_ID // Replace with your user ID (this is initialized in useEffect)
      )
      .then(
        (result) => {
          setStatus("Your message was sent successfully!");
          setFormData({
            user_name: "",
            user_email: "",
            subject: "",
            message: "",
          }); // Reset form
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2 className="title">Contact Me</h2>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="user_name">Name:</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />

          <label htmlFor="user_email">Email:</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />

          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>

      {status && <div className="status">{status}</div>}
    </section>
  );
};

export default ContactForm;
