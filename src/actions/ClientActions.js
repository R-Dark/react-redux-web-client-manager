import firebase from 'firebase'


import {
  CLIENTS_FETCH_SUCCESS,
  SEARCH_CLIENT
} from './types';

export const clientsFetch = () => {

  return (dispatch) => {
    firebase.database().ref(`/`)
      .on('value', snapshot => {
        // console.log(snapshot.val())
        dispatch({ type: CLIENTS_FETCH_SUCCESS, payload: snapshot.val() })
      })

  }
}

export const searchClient = (ownername) => {

  return (dispatch) => {
    firebase.database().ref(`/7`)
      .on('value', snapshot => {
        // console.log(snapshot.val())
        // console.log(ownername)
        dispatch({ type: SEARCH_CLIENT, payload: snapshot.val() })
      })

  }
}
