import "./Contact.css";
import React from 'react';
import { useState } from 'react';


function ContactUs() {
  // State for form fields (if applicable)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission (if applicable)
  const handleSubmit = (event) => {
    event.preventDefault();
    // Your logic to handle form data submission
  };

  return (
    <section className="contact-us">
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          We'd love to hear from you! Feel free to contact us with any questions
          or inquiries you may have.
        </p>
        <ul className="contact-details">
          <li>
            <i className="material-icons">phone</i>
            <span>+91 99256-02832</span>
          </li>
          <li>
            <i className="material-icons">email</i>
            <span>snkt_trivedi@gmail.com</span>
          </li>
          <li>
            <i className="material-icons">place</i>
            <span>Jeet Royal , Palaj , Gandhinagar</span>
          </li>
        </ul>
      </div>
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs
