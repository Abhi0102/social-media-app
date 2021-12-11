import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <form className="login-form">
        <span className="login-heading">Log In</span>
        <div>
          <span className="input-title">Email</span>
          <br />
          <input type="email" placeholder="Email"></input>
        </div>
        <div>
          <span className="input-title">Password</span>
          <br />
          <input type="password" placeholder="Password"></input>
        </div>
        <div>
          <button type="Submit">Login</button>
        </div>
      </form>
    );
  }
}

export default Login;
