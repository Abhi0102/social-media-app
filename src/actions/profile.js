import { APIUrls } from '../helpers/url';
import { getAuthToken } from '../helpers/utils';
import {
  GET_USER_WITH_ID,
  GET_USER_WITH_ID_FAIL,
  GET_USER_WITH_ID_SUCCESS,
} from './actionType';

export function startFetchUserByID() {
  return {
    type: GET_USER_WITH_ID,
  };
}

export function getUserByIdSuccess(user) {
  return {
    type: GET_USER_WITH_ID_SUCCESS,
    user,
  };
}

export function getUserByIdFail(error) {
  return {
    type: GET_USER_WITH_ID_FAIL,
    error,
  };
}

export function getUserById(userId) {
  console.log(userId);
  return (dispatch) => {
    dispatch(startFetchUserByID());
    const url = APIUrls.getUserById(userId);
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthToken()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          dispatch(getUserByIdSuccess(data.data.user));
          return;
        } else {
          dispatch(getUserByIdFail(data.message));
        }
      });
  };
}
