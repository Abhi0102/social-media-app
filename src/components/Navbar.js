import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
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
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
