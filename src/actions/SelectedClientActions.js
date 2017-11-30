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

export const updateOffer = ( offerUpdate, id ) => {
  return (dispatch) => {
    firebase.database().ref(id)
      .update( offerUpdate )
      .then(() => {
        dispatch({ type: UPDATE_OFFER_SUCCESS, payload: offerUpdate })
    })
  }
}

export const updateStatus = ( statusUpdate, id ) => {
  return (dispatch) => {
    firebase.database().ref(id)
      .update( statusUpdate )
      .then(() => {
        dispatch({ type: UPDATE_STATUS_SUCCESS, payload: statusUpdate })
    })
  }
}
