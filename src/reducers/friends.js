import { FETCH_FRIEND_SUCCESS } from '../actions/actionType';

const defaultFriendState = [];
export default function posts(state = defaultFriendState, action) {
  switch (action.type) {
    case FETCH_FRIEND_SUCCESS:
      return [...action.friends];
    default:
      return state;
  }
}
