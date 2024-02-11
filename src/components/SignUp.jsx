import React, { useState } from "react";
import "./Signup.css"; // Import CSS file
import image from "./tasveer/bg.jpg"; // Import image file
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your signup logic here, such as sending the form data to the backend
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div>
      {/* Background div with image */}
      <div
        className="background"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="big">
        <div className="signup-container">
          <h2 className="signup-title">Signup</h2>
          <form className="signup-form" onSubmit={handleSubmit}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Signup</button>
          </form>
          <p>
            Already have an account? <NavLink to="/login">Login</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
