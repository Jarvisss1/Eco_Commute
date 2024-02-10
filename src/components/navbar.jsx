import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          {/* Logo component */}
          <Logo />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {/* Hamburger component */}
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/components/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/components/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/components/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/components/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/components/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Hamburger component

const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    {/* Hamburger SVG content */}
  </svg>
);

// Logo component
const Logo = () => (
  <svg
    id="logo-52"
    width="170"
    height="41"
    viewBox="0 0 170 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Logo SVG content */}
  </svg>
);

export default Navbar;
