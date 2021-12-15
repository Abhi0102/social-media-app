import React, { Component } from 'react';
import { PostsList } from './';
import CreatePost from './CreatePost';
import FriendList from './FriendList';

class Home extends Component {
  render() {
    const { posts, isLoggedIn, friends } = this.props;
    return (
      <div className="home-ui">
        <div className="post-list-container">
          {isLoggedIn && <CreatePost />}
          <PostsList posts={posts} />
        </div>
        {isLoggedIn && (
          <div className="friends-container">
            <FriendList friends={friends} />
          </div>
        )}
      </div>
    );
  }
}

export default Home;
