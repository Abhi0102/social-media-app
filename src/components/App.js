import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Home, Login, SignUp, Page404 } from './';
import jwt_decode from 'jwt-decode';
import { authenticateUser } from '../actions/auth';

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    this.props.dispatch(fetchPosts());
    if (token) {
      const user = jwt_decode(token);
      this.props.dispatch(authenticateUser(user));
    }
  }

  render() {
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          {/* <PostsList posts={posts} /> */}
        </div>
        <Routes>
          {/* <Route path="/" element={<Login posts={posts} />} /> */}
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(App);
