import { FETCH_SEARCH_RESULT_SUCCESS } from './actionType';
import { APIUrls } from '../helpers/url';
import { getAuthToken } from '../helpers/utils';

export function searchUser(searchText) {
  return (dispatch) => {
    const url = APIUrls.userSearch(searchText);
    fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthToken()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(searchResultSuccess(data.data.users));
        } else {
          dispatch(searchResultSuccess([]));
        }
      });
  };
}

export function searchResultSuccess(users) {
  return {
    type: FETCH_SEARCH_RESULT_SUCCESS,
    users,
  };
}
