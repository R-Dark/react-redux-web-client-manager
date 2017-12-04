import firebase from 'firebase'
import {reset} from 'redux-form';

import {
  CLIENTS_FETCH_SUCCESS,
  SEARCH_CLIENT,
  NONE_SELECTED
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

export const searchClient = (ownername, state) => {
  // console.log(ownername, state, zip)
  return (dispatch) => {
    firebase.database()
    .ref("/")
      .orderByChild("Owner")
        .equalTo(ownername)
          .on('value', snapshot => {
            // console.log(snapshot.val())
            // console.log(ownername)
            dispatch({ type: SEARCH_CLIENT, payload: snapshot.val() })
            console.log(snapshot.val())
            dispatch(reset('searchform'));
        })
     }
  }

  export function noneSelected() {
    return {
      type: NONE_SELECTED
    };
  }
