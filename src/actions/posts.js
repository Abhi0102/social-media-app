import { APIUrls } from '../helpers/url';
import { UPDATE_POSTS } from './actionType';

export function fetchPosts() {
  return (dispatch) => {
    const url = APIUrls.fetchPost();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updatePosts(data.data.posts));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
