import React from 'react';

function Comments(props) {
  const { comment } = props;
  return (
    <div className="comment-item">
      <div className='comment-item-title'>
        <span>{comment.user.name}</span>
        <span>{comment.likes.length} likes</span>
      </div>
      <div className='comment-content'>{comment.content}</div>
    </div>
  );
}

export default Comments;
