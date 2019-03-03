import React from "react";
import { connect } from 'react-redux';
import { getLogin } from '../Thunks'

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault()
    this.props.getLogin(this.state);
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          placeholder="username"
          value={this.state.username}
          name="username"
          onChange={this.changeHandler}
        />
        <input
          type="password"
          placeholder="password"
          value={this.state.password}
          name="password"
          onChange={this.changeHandler}
        />
      <button>Login</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    loginUser: userObj => dispatch(getLogin(userObj))
})

export default connect(null, mapDispatchToProps)(Login);
