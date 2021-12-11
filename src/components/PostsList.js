import React, { Component } from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

class PostsList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        {posts.map((post) => {
          return <Post post={post} key={post._id} />;
        })}
      </div>
    );
  }
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsList;
