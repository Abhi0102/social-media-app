import { APIUrls } from '../helpers/url';
import { FETCH_FRIEND_SUCCESS } from './actionType';
import { getAuthToken } from '../helpers/utils';

export function fetchUserFriends(userId) {
  return (dispatch) => {
    const url = APIUrls.userFriends(userId);
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthToken()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(fetchFriendSuccess(data.data.friends));
        } else {
        }
      });
  };
}

export function fetchFriendSuccess(friends) {
  return {
    type: FETCH_FRIEND_SUCCESS,
    friends,
  };
}

// export function fetchFriendSuccess(friends) {
//   return {
//     type: FETCH_FRIEND_SUCCESS,
//     friends,
//   };
// }
