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
  dispatch({
    type: AUTH_USER,
    payload: user
  });

 history.push('/brain')
};


export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
