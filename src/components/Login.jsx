import React from "react";
import "./Login.css";
import image from "./tasveer/bg.jpg";
import { NavLink } from "react-router-dom";


function Login() {
  return (
    <div>
      <div
        className="background"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="login-container">
        <div
          className="blurry-background"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="login-form">
          <h1>Login</h1>
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
            <div className="checkbox-container">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <a href="#">Forgot Password?</a>
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account?
            <NavLink to="/signup" >
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
