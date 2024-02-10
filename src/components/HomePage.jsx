import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./homePage.css";
import DashboardPage from "./DashBoardPage";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="hero">
        <h1 className="hero-title">Eco-Friendly Transportation Tracker</h1>
        <p className="hero-description">
          Make a difference by tracking your transportation activities and
          choosing eco-friendly options.
        </p>
        <NavLink to="/DashboardPage" className="hero-button">
          Get Started
        </NavLink>
      </div>
      <div className="features">
        <div className="feature">
          <h2>Track Your Journeys</h2>
          <p>
            Monitor your transportation activities, including walking, cycling,
            driving, and public transit.
          </p>
        </div>
        <div className="feature">
          <h2>Calculate Carbon Footprint</h2>
          <p>
            Estimate the environmental impact of your journeys with our carbon
            footprint calculator.
          </p>
        </div>
        <div className="feature">
          <h2>Get Eco-Friendly Recommendations</h2>
          <p>
            Receive personalized suggestions to reduce your carbon footprint and
            choose greener transportation options.
          </p>
        </div>
      </div>
      <div className="cta">
        <p>
          Join us in creating a cleaner and healthier planet. Start your journey
          today!
        </p>
        <NavLink to="/signup" className="cta-button">
          Sign Up Now
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
