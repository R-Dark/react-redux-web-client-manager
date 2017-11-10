import firebase from 'firebase'


import {
  CLIENTS_FETCH_SUCCESS
} from './types';

export const clientsFetch = () => {

  return (dispatch) => {
    firebase.database().ref(`/96/abstract`)
      .on('value', snapshot => {
        dispatch({ type: CLIENTS_FETCH_SUCCESS, payload: snapshot.val() })
      })

  }
}
