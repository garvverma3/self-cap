import React from 'react';
import '../CSS/Navbar.css';
import { FaDumbbell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FaDumbbell className="logo-icon" />
        <Link to="/" className="logo-text">FitChallenge</Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/" className="active">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>

      <div className="navbar-buttons">
        <Link to="/login"><button className="btn login-btn">Login</button></Link>
        <Link to="/signup"><button className="btn signup-btn">Sign Up</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
