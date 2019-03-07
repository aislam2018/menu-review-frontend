import React, { Component } from "react";
import { Link } from "react-router-dom";
import {withRouter } from 'react-router'
import {  logoutUser } from '../Actions'
import { connect } from 'react-redux'
import { Input, Menu, Segment } from 'semantic-ui-react'


class Navbar extends Component {
  state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
      const { activeItem } = this.state

  return (
    <div className="container">
      <Menu pointing>
      <Link to="/"> <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} /></Link>
      <Link to="/login"><Menu.Item
        name='login/signup'
        active={activeItem === 'login/signup'}
        onClick={this.handleItemClick}
      /></Link>
    <Link to="/restaurants"><Menu.Item name='restaurants' active={activeItem === 'restaurants'} onClick={this.handleItemClick} /></Link>
    <Link to="/login" onClick={() => this.props.logoutUser()}><Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} /></Link>
   </Menu>

    </div>

  )
   }
};
const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})

export default withRouter(connect(null, mapDispatchToProps)(Navbar));

// <nav>
// <ul>
//   <Link to="/">
//     <li>Home</li>
//   </Link>
//   <Link to="/login">
//     <li>Sign Up/Login</li>
//   </Link>
//   <Link to="/restaurants">
//     <li>restaurants</li>
//   </Link>
//
//   <Link to="/login" onClick={() => this.props.logoutUser()}>
//     <li>logout</li>
//   </Link>
// </ul>
// </nav>
