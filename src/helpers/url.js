const rootAPIUrl = `http://codeial.codingninjas.com:8000/api/v2`;
export const APIUrls = {
  login: () => `${rootAPIUrl}/users/login`,
  fetchPost: (page = 1, limit = 5) =>
    `${rootAPIUrl}/posts?page=${page}&limit=${limit}`,
  signup: () => `${rootAPIUrl}/users/signup`,
  editProfile: () => `${rootAPIUrl}/users/edit`,
};

