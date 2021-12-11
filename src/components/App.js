import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import PostsList from './PostsList';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <nav className="navbar">
          <div>Left</div>
          <div className="nav-center">
            <img
              className="search-icon"
              src="https://cdn-icons.flaticon.com/png/512/3031/premium/3031293.png?token=exp=1639231417~hmac=0a17bab8700271eb46617d18b4578477"
              alt="search-icon"
            ></img>
            <input placeholder="Search"></input>
          </div>
          <div>Register</div>
        </nav>
        <PostsList posts={posts} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(App);
