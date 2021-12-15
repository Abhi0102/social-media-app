import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
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
