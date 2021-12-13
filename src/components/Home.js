import React, { Component } from 'react';
import { PostsList } from './';
import Friends from './Friends';

class Home extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="home-ui">
        <div className="post-list-container">
          <PostsList posts={posts} />
        </div>
        <div className="friends-container">
          <Friends />
        </div>
      </div>
    );
  }
}

export default Home;
