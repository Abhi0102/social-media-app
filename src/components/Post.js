import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
  render() {
    const { post } = this.props;
    const { user } = post;
    return (
      <>
        <div className="post-container">
          <div>
            <Link to={`/user/${user._id}`}>{user.name}</Link>
          </div>
          {/* <div>{post.createdAt}</div> */}
          <div>{post.content}</div>
        </div>
      </>
    );
  }
}

export default Post;
