import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Post } from './';

class PostsList extends Component {
  render() {
    const { posts, isLoggedIn } = this.props;
    return (
      <div className="post-list">
        {posts.map((post) => {
          return <Post post={post} key={post._id} isLoggedIn={isLoggedIn} />;
        })}
      </div>
    );
  }
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsList;
