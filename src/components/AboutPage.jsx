import React from "react";
import "./About.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="left-section">
        <div className="about-header">
          <h1>About Us</h1>
          <p>
            At Eco-Commute, we're dedicated to sustainable transportation and a
            greener future. Our mission is to promote eco-friendly travel
            options like walking, cycling, and public transit while empowering
            individuals to reduce their carbon footprint. Through technology,
            partnerships, and advocacy, we're reshaping transportation for a
            healthier planet. Join us in creating a brighter, cleaner future—one
            eco-commute at a time.
          </p>
        </div>
      </div>
      <div className="right-section">
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>
            We are committed to promoting sustainable transportation options to
            reduce carbon emissions and create a cleaner environment for future
            generations.
          </p>
          <h2>Our Goals</h2>
          <ul>
            <li>
              Encourage the use of eco-friendly modes of transportation such as
              walking, cycling, and public transit.
            </li>
            <li>
              Provide tools and resources to help individuals calculate their
              carbon footprint and make informed choices.
            </li>
            <li>
              Collaborate with local communities and organizations to advocate
              for policies that support sustainable transportation initiatives.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
