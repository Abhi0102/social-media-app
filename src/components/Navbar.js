import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { searchUser } from '../actions/search';

class Navbar extends Component {
  logOut = () => {
    localStorage.removeItem('token');
    this.props.dispatch(logoutUser());
  };

  handleSearch = (e) => {
    const searchText = e.target.value;
    this.props.dispatch(searchUser(searchText));
  };
  render() {
    const { auth, results } = this.props;
    return (
      <nav className="navbar">
        <Link to="/">
          <div className="nav-left">Left</div>
        </Link>
        <div className="nav-center">
          <div className="search-container">
            <FontAwesomeIcon className="search-icon" icon={faSearch} />
            <input placeholder="Search" onChange={this.handleSearch}></input>
          </div>

          {results.length > 0 && (
            <div className="search-result-container">
              {results.map((user) => {
                return (
                  <Link to={`/user/${user._id}`}>
                    <div className="search-result-item">
                      <div className="search-img">
                        <img
                          src="/favpng_avatar-user-profile-icon.png"
                          alt="avatar"
                          className="search-avatar-img"
                        />
                      </div>
                      <div>{user.name}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
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
    results: state.search.results,
  };
}

export default connect(mapStateToProps)(Navbar);
