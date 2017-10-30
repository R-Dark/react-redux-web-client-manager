import firebase from 'firebase'
import history from './history'

import {
  SIGNIN_USER,
  UNAUTH_USER,
  AUTH_USER,
  AUTH_ERROR
} from './types';

export const signinUser = ({ email, password }) => {
  return (dispatch) => {
  dispatch({ type: SIGNIN_USER })

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => {
      dispatch(authError('Login Failed'))
    });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: AUTH_USER, payload: user });
  localStorage.setItem('isUser', 'yes')


  history.push('/')
};


export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser() {
  localStorage.removeItem('isUser')
  return { type: UNAUTH_USER }
}
