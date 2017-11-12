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
    .then(user => {
      // console.log(user)
      loginUserSuccess(dispatch, user)
    })
    .catch(() => {
      dispatch(authError('Login Failed'))
    });
  };
};

const loginUserSuccess = (dispatch, user) => {
  const { currentUser } = firebase.auth()
  dispatch({ type: AUTH_USER, payload: user });
  localStorage.setItem('token', currentUser.uid)

  history.push('/')
};


export const authError = (error) => {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export const signoutUser = () => {
  localStorage.removeItem('token')
  return { type: UNAUTH_USER }
}
