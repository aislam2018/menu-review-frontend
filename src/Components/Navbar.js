import React from "react";
import { Link } from "react-router-dom";
import {withRouter } from 'react-router'
const Navbar = () => {
  return (
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/login">
        <li>Sign Up/Login</li>
      </Link>
      <Link to="/restaurants">
        <li>Restaurants</li>
      </Link>
      <Link to="/menu">
        <li>Menu</li>
      </Link>
      <Link to="/item">
        <li>Item</li>
      </Link>
    </ul>
  );
};

export default withRouter(Navbar);
