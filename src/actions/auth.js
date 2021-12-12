import { APIUrls } from '../helpers/url';
import { getFormBody } from '../helpers/utils';
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
} from './actionType';

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAIL,
    error: errorMessage,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user: user,
  };
}

export function login(email, password) {
  return (dispatch) => {
    dispatch(startLogin());
    const url = APIUrls.login();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data = ', data);
        if (data.success) {
          //Dispatch action to save
          localStorage.setItem('token', data.data.token);
          dispatch(loginSuccess(data.data.user));
          return;
        } else {
          dispatch(loginFailed(data.message));
        }
      });
  };
}

export function startSignup() {
  return {
    type: SIGN_UP_START,
  };
}
export function signupFailed(errorMessage) {
  return {
    type: SIGN_UP_FAIL,
    error: errorMessage,
  };
}

export function signupSuccessful(user) {
  return {
    type: SIGN_UP_SUCCESS,
    user,
  };
}

export function signup(email, name, password, confirmPassword) {
  return (dispatch) => {
    dispatch(startSignup());
    const url = APIUrls.signup();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({
        email,
        name,
        password,
        confirm_password: confirmPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem('token', data.data.token);
          dispatch(signupSuccessful(data.data.user));
          return;
        } else {
          dispatch(signupFailed(data.message));
        }
      });
  };
}

export function authenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user,
  };
}

export function logoutUser() {
  return {
    type: LOG_OUT,
  };
}

export function clearAuthState() {
  return {
    type: CLEAR_AUTH_STATE,
  };
}
