import React, { Component, useState } from 'react';
import { clearAuthState, login } from '../actions/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//     };
//   }

//   componentWillUnmount() {
//     this.props.dispatch(clearAuthState());
//   }

//   handleEmailInput = (e) => {
//     this.setState({
//       email: e.target.value,
//     });
//   };

//   handlePasswordInput = (e) => {
//     this.setState({
//       password: e.target.value,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { email, password } = this.state;

//     if (email && password) {
//       this.props.dispatch(login(email, password));
//     }
//   };

//   render() {
//     const { error, inProgress, isLoggedIn } = this.props.auth;
//     // console.log();
//     // const from = location.state?.from?.pathname || '/';

//     if (isLoggedIn) {
//       return <Navigate to="/" />;
//     }
//     return (
//       <form className="login-form">
//         <span className="login-heading">Log In</span>
//         {error && <div className="error-msg">{error}</div>}
//         <div>
//           <span className="input-title">Email</span>
//           <br />
//           <input
//             type="email"
//             placeholder="Email"
//             onChange={this.handleEmailInput}
//             value={this.state.email}
//           ></input>
//         </div>
//         <div>
//           <span className="input-title">Password</span>
//           <br />
//           <input
//             type="password"
//             placeholder="Password"
//             onChange={this.handlePasswordInput}
//             value={this.state.password}
//           ></input>
//         </div>
//         <div>
//           <button
//             type="Submit"
//             disabled={inProgress}
//             onClick={this.handleSubmit}
//           >
//             Login
//           </button>
//         </div>
//       </form>
//     );
//   }
// }

// import React from 'react';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, inProgress, isLoggedIn } = props.auth;
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || '/';

  if (isLoggedIn) {
    navigate(from, { replace: true });
  }
  

  function handleSubmit(e) {
    e.preventDefault();
    // const { email, password } = this.state;

    if (email && password) {
      props.dispatch(login(email, password));
    }
  }

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
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
      </div>
      <div>
        <span className="input-title">Password</span>
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
      </div>
      <div>
        <button
          type="Submit"
          disabled={inProgress}
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </button>
      </div>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Login);
