import React from "react";
import { connect } from 'react-redux';
import { getLogin } from '../Thunks'
import { withRouter } from "react-router-dom";
import { Button, Checkbox, Form } from 'semantic-ui-react'

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
    this.props.history.push('/restaurants')
  };

  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <Form.Field>

        <input
          type="text"
          placeholder="username"
          value={this.state.username}
          name="username"
          onChange={this.changeHandler}
        />
      </Form.Field>
      <Form.Field>
        <input
          type="password"
          placeholder="password"
          value={this.state.password}
          name="password"
          onChange={this.changeHandler}
        />
    </Form.Field>
      <Button type='submit'>Login</Button>
      </Form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    getLogin: userObj => dispatch(getLogin(userObj))
})

export default withRouter(connect(null, mapDispatchToProps)(Login));




//   <Form>
//     <Form.Field>
//       <label>First Name</label>
//       <input placeholder='First Name' />
//     </Form.Field>
//     <Form.Field>
//       <label>Last Name</label>
//       <input placeholder='Last Name' />
//     </Form.Field>
//     <Form.Field>
//       <Checkbox label='I agree to the Terms and Conditions' />
//     </Form.Field>
//     <Button type='submit'>Submit</Button>
//   </Form>
