import React, { useState } from 'react';
import { createPost } from '../actions/posts';
import { connect } from 'react-redux';

function CreatePost(props) {
  const [content, setContent] = useState('');

  function handleCreatePost() {
    props.dispatch(createPost(content));
  }
  return (
    <div className="create-post">
      <div className="post-text-area-container">
        <textarea
          className="post-text-area"
          autoFocus
          placeholder="Type here to create post..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {/* <div>{content}</div> */}
      </div>
      <button className="post-btn" onClick={() => handleCreatePost()}>
        Create Post
      </button>
    </div>
  );
}

export default connect()(CreatePost);
