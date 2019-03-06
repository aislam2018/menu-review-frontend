import React, { Component } from "react";
import { Link } from "react-router-dom";
import {withRouter } from 'react-router'
import {  logoutUser } from '../Actions'
import { connect } from 'react-redux'


class Navbar extends Component {
  render() {
  return (
    <div className="container">
      <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/login">
          <li>Sign Up/Login</li>
        </Link>
        <Link to="/restaurants">
          <li>restaurants</li>
        </Link>

        <Link to="/login" onClick={() => this.props.logoutUser()}>
          <li>logout</li>
        </Link>
      </ul>
      </nav>
    </div>
  )
   }
};
const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})

export default withRouter(connect(null, mapDispatchToProps)(Navbar));
