import {
  GET_USER_WITH_ID,
  GET_USER_WITH_ID_FAIL,
  GET_USER_WITH_ID_SUCCESS,
} from '../actions/actionType';

const initialProfileState = {
  user: {},
  error: null,
  success: null,
  inProgress: false,
};
export default function profile(state = initialProfileState, action) {
  switch (action.type) {
    case GET_USER_WITH_ID_SUCCESS:
      return {
        ...state,
        success: true,
        user: action.user,
        inProgress: false,
      };

    case GET_USER_WITH_ID_FAIL:
      return {
        ...state,
        error: action.error,
        inProgress: false,
      };

    case GET_USER_WITH_ID:
      return {
        ...state,
        inProgress: true,
      };
    default:
      return state;
  }
}
