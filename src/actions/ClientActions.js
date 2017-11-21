import firebase from 'firebase'


import {
  CLIENTS_FETCH_SUCCESS,
  SEARCH_CLIENT,
  CLIENT_SELECTED
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

export const searchClient = (ownername, state, zip) => {
  // console.log(ownername, state, zip)
  return (dispatch) => {
    firebase.database()
    .ref("/")
      .orderByChild("OWNER")
        .equalTo(ownername)
          .on('value', snapshot => {
            // console.log(snapshot.val())
            // console.log(ownername)
            dispatch({ type: SEARCH_CLIENT, payload: snapshot.val() })
          })

    }
  }

  export function selectClient(clientInfo) {
    return {
      type: CLIENT_SELECTED,
      payload: clientInfo
    };
  }
