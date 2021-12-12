import {
  AUTHENTICATE_USER,
  CLEAR_AUTH_STATE,
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOG_OUT,
  SIGN_UP_FAIL,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
} from '../actions/actionType';

const initialAuthState = {
  user: {},
  error: null,
  isLoggedIn: false,
  inProgress: false,
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_START:
    case SIGN_UP_START:
      return {
        ...state,
        inProgress: true,
      };
    case LOGIN_SUCCESS:
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
        error: null,
        inProgress: false,
      };
    case LOGIN_FAIL:
    case SIGN_UP_FAIL:
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };

    case AUTHENTICATE_USER:
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
      };

    case LOG_OUT:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      };

    case CLEAR_AUTH_STATE:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
}
