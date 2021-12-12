import React, { Component } from 'react';
import { login } from '../actions/auth';
import { connect } from 'react-redux';

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
    const { email, password } = this.state;

    if (email && password) {
      this.props.dispatch(login(email, password));
    }
  };

  render() {
    const { error, inProgress } = this.props.auth;
    return (
      <form className="login-form">
        <span className="login-heading">Log In</span>
        {error && <div className="error-msg">{error}</div>}
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
          <button
            type="Submit"
            disabled={inProgress}
            onClick={this.handleSubmit}
          >
            Login
          </button>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Login);
