import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmailInput = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordInput = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form className="login-form">
        <span className="login-heading">Log In</span>
        <div>
          <span className="input-title">Email</span>
          <br />
          <input
            type="email"
            placeholder="Email"
            onChange={this.handleEmailInput}
            value={this.state.email}
          ></input>
        </div>
        <div>
          <span className="input-title">Password</span>
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={this.handlePasswordInput}
            value={this.state.password}
          ></input>
        </div>
        <div>
          <button type="Submit" onClick={this.handleSubmit}>
            Login
          </button>
        </div>
      </form>
    );
  }
}

export default Login;
