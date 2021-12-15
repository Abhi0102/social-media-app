const rootAPIUrl = `http://codeial.codingninjas.com:8000/api/v2`;
export const APIUrls = {
  login: () => `${rootAPIUrl}/users/login`,
  fetchPost: (page = 1, limit = 5) =>
    `${rootAPIUrl}/posts?page=${page}&limit=${limit}`,
  signup: () => `${rootAPIUrl}/users/signup`,
  editProfile: () => `${rootAPIUrl}/users/edit`,
  getUserById: (userId) => `${rootAPIUrl}/users/${userId}`,
  userFriends: (userId) => `${rootAPIUrl}/friendship/fetch_user_friends`,
  addFriend: (userId) =>
    `${rootAPIUrl}/friendship/create_friendship?user_id=${userId}`,
  removeFriend: (userId) =>
    `${rootAPIUrl}/friendship/remove_friendship?user_id=${userId}`,
  createPost: () => `${rootAPIUrl}/posts/create`,
  createComment: () => `${rootAPIUrl}/comments`,
  toggleLike: (id, likeType) =>
    `${rootAPIUrl}/likes/toggle?likeable_id=${id}&likeable_type=${likeType}`,
  userSearch: (searchText) => `${rootAPIUrl}/users/search?text=${searchText}`,
};
