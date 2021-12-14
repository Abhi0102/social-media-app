import {
  ADD_FRIEND,
  FETCH_FRIEND_SUCCESS,
  REMOVE_FRIEND,
} from '../actions/actionType';

const defaultFriendState = [];
export default function posts(state = defaultFriendState, action) {
  switch (action.type) {
    case FETCH_FRIEND_SUCCESS:
      console.log('ACTIONS', action.friends);
      return [...action.friends];
    case ADD_FRIEND:
      return state.concat(action.friend);
    case REMOVE_FRIEND:
      const newArr = state.filter(
        (friend) => friend.to_user._id !== action.userId
      );
      return newArr;
    default:
      return state;
  }
}
