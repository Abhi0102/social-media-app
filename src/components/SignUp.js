import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { clearAuthState, signup } from '../actions/auth';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
    };
  }

  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  handleInputChange = (feild, value) => {
    this.setState({
      [feild]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, name, password, confirmPassword } = this.state;
    if (email && name && password && confirmPassword) {
      this.props.dispatch(signup(email, name, password, confirmPassword));
    }
  };
  render() {
    const { error, inProgress, isLoggedIn } = this.props.auth;
    if (isLoggedIn) {
      return <Navigate to="/" />;
    }
    return (
      <form className="login-form">
        <span className="login-heading">Sign Up</span>
        <div>
          <span className="input-title">Email</span>
          <br />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => this.handleInputChange('email', e.target.value)}
            value={this.state.email}
          ></input>
        </div>
        <div>
          <span className="input-title">Name</span>
          <br />
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => this.handleInputChange('name', e.target.value)}
            value={this.state.name}
          ></input>
        </div>

        <div>
          <span className="input-title">Password</span>
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => this.handleInputChange('password', e.target.value)}
            value={this.state.password}
          ></input>
        </div>
        <div>
          <span className="input-title">Confirm Password</span>
          <br />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) =>
              this.handleInputChange('confirmPassword', e.target.value)
            }
            value={this.state.confirmPassword}
          ></input>
        </div>
        {error && <div className="error-msg">{error}</div>}
        <div>
          <button
            type="Submit"
            disabled={inProgress}
            onClick={this.handleSubmit}
          >
            Register
          </button>
        </div>
      </form>
      //   <form className="login-form">
      //     <span className="login-heading">Log In</span>
      //     {error && <div className="error-msg">{error}</div>}
      //     <div>
      //       <span className="input-title">Email</span>
      //       <br />
      //       <input
      //         type="email"
      //         placeholder="Email"
      //         onChange={this.handleEmailInput}
      //         value={this.state.email}
      //       ></input>
      //     </div>
      //     <div>
      //       <span className="input-title">Password</span>
      //       <br />
      //       <input
      //         type="password"
      //         placeholder="Password"
      //         onChange={this.handlePasswordInput}
      //         value={this.state.password}
      //       ></input>
      //     </div>
      //     <div>
      //       <button
      //         type="Submit"
      //         disabled={inProgress}
      //         onClick={this.handleSubmit}
      //       >
      //         Login
      //       </button>
      //     </div>
      //   </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(SignUp);
