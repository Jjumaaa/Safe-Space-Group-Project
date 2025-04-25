import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">SafeSpace</div>
      <div className="nav-links">
        <NavLink to="/" exact="true">Home</NavLink>
        <NavLink to="/postpage">View Blogs</NavLink>
        <NavLink to="/createpost" className="create-link">
          Create Post ✏️
        </NavLink>
        <NavLink to="/aboutus">About Us</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;