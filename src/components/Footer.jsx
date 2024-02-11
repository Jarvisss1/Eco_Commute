// Footer.jsx

import React from "react";
import "./footer.css"; // Import CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h3>Latest News</h3>
          <ul>
            <li>Stay tuned for exciting updates!</li>
            <li>New features coming soon.</li>
            <li>Subscribe to our newsletter for more.</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Subscribe to Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-info">
        <p>&copy; 2024 Eco-Commute. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
