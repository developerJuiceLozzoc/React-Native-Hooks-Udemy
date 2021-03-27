import {
  EMAIL_CHANGED, PASS_CHANGED,
  USER_LOGGEDIN, LOGIN_ERR,
  START_LOGIN,
} from './types';
import {SignupFlow} from '../Auth';

function emailChanged(text) {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
}

function passwordChanged(text) {
  return {
    type: PASS_CHANGED,
    payload: text,
  };
}

function sendLoginError(e) {
  return {
    type: LOGIN_ERR,
    payload: e,
  };
}

function startLoginProcess() {
  return {
    type: START_LOGIN,
  };
}

function SigninFlowAction({email, password}) {
  return function (dispatch) {
    SignupFlow(email, password)
      .then(function (user) {
        dispatch({
          type: USER_LOGGEDIN,
          payload: {email, password},
        });
      })
      .catch(function (e) {
        console.log('error', e);
        dispatch(sendLoginError(e));
      });
  };
}
export {
  SigninFlowAction,
  startLoginProcess, sendLoginError,
  passwordChanged, emailChanged,
};
