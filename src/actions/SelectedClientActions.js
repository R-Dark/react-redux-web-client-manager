import firebase from 'firebase'

import {
  CLIENT_SELECTED,
  UPDATE_OFFER_SUCCESS,
  UPDATE_STATUS_SUCCESS
} from './types';


export function selectClient(clientInfo) {
  return {
    type: CLIENT_SELECTED,
    payload: clientInfo
  };
}

export const updateOffer = ( offerUpdate ) => {
  return (dispatch) => {
    firebase.database().ref(`7`)
      .update( offerUpdate )
      .then(() => {
        dispatch({ type: UPDATE_OFFER_SUCCESS })
    })
  }
}

export const updateStatus = ( statusUpdate ) => {
  return (dispatch) => {
    firebase.database().ref(`7`)
      .update( statusUpdate )
      .then(() => {
        dispatch({ type: UPDATE_STATUS_SUCCESS })
    })
  }
}
