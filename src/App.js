import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import "./components/navbar.css";
import HomePage from './components/HomePage';
import logo from './components/tasveer/Logo.jpg';
import DashboardPage from './components/DashBoardPage';
import Signup from './components/SignUp';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src={logo} className='logo' alt="Logo" />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/carPool">Car Pool</NavLink>
              </li>
              <li>
                <NavLink to="/publicTransport">Public Transport</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

const Home = () => <div><h2>You are in the HomePage</h2></div>;
const CarPool = () => <h2>You are in the Car Pool</h2>;
const PublicTransport = () => <h2>You are in the Public Transport</h2>;
const About = () => <h2>You are in the About</h2>;
const Contact = () => <h2>You are in the Contact</h2>;

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carPool" element={<CarPool />} />
        <Route path="/publicTransport" element={<PublicTransport />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);

export default App;
