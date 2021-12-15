import React, { Component } from 'react';
import { PostsList } from './';
import Chat from './Chat';
import CreatePost from './CreatePost';
import FriendList from './FriendList';

class Home extends Component {
  render() {
    const { posts, isLoggedIn, friends } = this.props;
    return (
      <>
        <div className="home-ui">
          <div className="post-list-container">
            {isLoggedIn && <CreatePost />}
            <PostsList posts={posts} isLoggedIn={isLoggedIn} />
          </div>
          {isLoggedIn && (
            <div className="aside-container">
              <div className="friends-container">
                <FriendList friends={friends} />
              </div>

              <div className="chat-box">
                <Chat />
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Home;
