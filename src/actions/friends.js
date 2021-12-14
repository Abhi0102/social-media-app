import { APIUrls } from '../helpers/url';
import { FETCH_FRIEND_SUCCESS, ADD_FRIEND, REMOVE_FRIEND } from './actionType';
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
          //   console.log('In Fetch User Friend ', data.data.friends);
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

export function addFriend(friend) {
  return {
    type: ADD_FRIEND,
    friend,
  };
}

export function removeFriend(userId) {
  return {
    type: REMOVE_FRIEND,
    userId,
  };
}

// export function fetchFriendSuccess(friends) {
//   return {
//     type: FETCH_FRIEND_SUCCESS,
//     friends,
//   };
// }
