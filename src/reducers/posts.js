import { ADD_POST, CREATE_COMMENT, UPDATE_POSTS } from '../actions/actionType';

export default function posts(state = [], action) {
  switch (action.type) {
    case UPDATE_POSTS:
      return action.posts;
    case ADD_POST:
      return [action.post, ...state];
    case CREATE_COMMENT:
      const newPost = state.map((post) => {
        if (post._id === action.postId) {
          return {
            ...post,
            comments: [action.comment, ...post.comments],
          };
        }
        return post;
      });
      return newPost;
    default:
      return state;
  }
}
