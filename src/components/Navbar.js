import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/auth';

class Navbar extends Component {
  logOut = () => {
    localStorage.removeItem('token');
    this.props.dispatch(logoutUser());
  };
  render() {
    const { auth } = this.props;
    return (
      <nav className="navbar">
        <Link to="/">
          <div className="nav-left">Left</div>
        </Link>
        <div className="nav-center">
          <img
            className="search-icon"
            src="https://cdn-icons.flaticon.com/png/512/3031/premium/3031293.png?token=exp=1639231417~hmac=0a17bab8700271eb46617d18b4578477"
            alt="search-icon"
          ></img>
          <input placeholder="Search"></input>
        </div>
        <div className="nav-right">
          <div>
            <ul>
              {!auth.isLoggedIn && (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/signup">Register</Link>
                  </li>
                </>
              )}
              {auth.isLoggedIn && (
                <>
                  <li>
                    <Link to="/profile">{auth.user.name}</Link>
                  </li>
                  <li onClick={this.logOut}>Logout</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Navbar);
