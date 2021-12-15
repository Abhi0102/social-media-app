import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComments } from '@fortawesome/free-solid-svg-icons';
import { Comments } from '.';

class Post extends Component {
  render() {
    const { post } = this.props;
    const { user } = post;
    console.log('Posts', post);
    return (
      <div className="post-container">
        <div className="post-top-container">
          <div className="post-img-container">
            <img
              src="/favpng_avatar-user-profile-icon.png"
              className="avatar-img"
              alt="profile-img"
            ></img>
          </div>
          <div className="post-title">
            <Link to={`/user/${user._id}`}>{user.name}</Link>
          </div>
        </div>
        <div className="post-content">{post.content}</div>
        <div className="like-container">
          <FontAwesomeIcon icon={faHeart} className="like-icon" />
          <FontAwesomeIcon icon={faComments} className="like-icon" />
        </div>
        <div className="comments-container">
          <input className="comment-input" placeholder="Start Typing Here..." />
          <div className="comment-list">
            {post.comments.map((comment) => (
              <Comments key={comment._id} postId={post._id} comment={comment} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
