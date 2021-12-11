import React, { Component } from 'react';

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <>
        <div className="post-container">
          <div>{post.user.name}</div>
          {/* <div>{post.createdAt}</div> */}
          <div>{post.content}</div>
        </div>
      </>
    );
  }
}

export default Post;
