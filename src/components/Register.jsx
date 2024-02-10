import React from "react";
import "./Register.css";

function Register() {
  return (
    <div>
      <div className="background"></div>
      <div className="register-container">
        <div className="blurry-background"></div>
        <div className="register-form">
          <h1>Register</h1>
          <form>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter Your Full Name"
            />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter Your Email" />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
            />
            <div className="checkbox-container">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                I agree to all the statements in Terms of Service
              </label>
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <div className="social-connect">
            <p>GET CONNECTED WITH</p>
            <div className="social-icons">
              <a href="#" className="gplus">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
