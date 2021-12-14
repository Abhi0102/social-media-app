import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Home, Login, SignUp, Page404, Profile } from './';
import jwt_decode from 'jwt-decode';
import { authenticateUser } from '../actions/auth';
import PrivateRoute from '../helpers/PrivateRoute';
import UserProfile from './UserProfile';
import { fetchUserFriends } from '../actions/friends';

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    this.props.dispatch(fetchPosts());
    if (token) {
      const user = jwt_decode(token);
      this.props.dispatch(authenticateUser(user));
      this.props.dispatch(fetchUserFriends());
    }
  }

  render() {
    const { posts, auth, friends } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          {/* <PostsList posts={posts} /> */}
        </div>
        <Routes>
          {/* <Route path="/" element={<Login posts={posts} />} /> */}
          <Route
            path="/"
            element={
              <Home
                posts={posts}
                isLoggedIn={auth.isLoggedIn}
                friends={friends}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile isLoggedIn={auth.isLoggedIn} />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/:userId"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    auth: state.auth,
    friends: state.friends,
  };
}

export default connect(mapStateToProps)(App);
