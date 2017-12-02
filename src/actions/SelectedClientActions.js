import firebase from 'firebase'

import {
  CLIENT_SELECTED,
  UPDATE_OFFER_SUCCESS,
  UPDATE_STATUS_SUCCESS,
  UPDATE_ASSIGNMENT_SUCCESS,
  UPDATE_CONTACTNAME_SUCCESS,
  UPDATE_PHONENUMBER_SUCCESS,
  UPDATE_EMAIL_SUCCESS,
  UPDATE_CONTACTNOTE_SUCCESS,
  UPDATE_CLIENTNOTE_SUCCESS
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

export const updateAssignment = ( assignTo, id ) => {
  return (dispatch) => {
    firebase.database().ref(id)
      .update( assignTo )
      .then(() => {
        dispatch({ type: UPDATE_ASSIGNMENT_SUCCESS, payload: assignTo })
    })
  }
}

export const updateContactName = ( contactName, id ) => {
  return (dispatch) => {
    firebase.database().ref(id)
      .update( contactName )
      .then(() => {
        dispatch({ type: UPDATE_CONTACTNAME_SUCCESS, payload: contactName })
    })
  }
}

export const updatePhoneNumber = ( phoneNumber, id ) => {
  return (dispatch) => {
    firebase.database().ref(id)
      .update( phoneNumber )
      .then(() => {
        dispatch({ type: UPDATE_PHONENUMBER_SUCCESS, payload: phoneNumber })
    })
  }
}

export const updateContactEmail = ( contactEmail, id ) => {
  return (dispatch) => {
    firebase.database().ref(id)
      .update( contactEmail )
      .then(() => {
        dispatch({ type: UPDATE_EMAIL_SUCCESS, payload: contactEmail })
    })
  }
}

export const updateContactNote = ( contactNote, id ) => {
  return (dispatch) => {
    firebase.database().ref(id)
      .update( contactNote )
      .then(() => {
        dispatch({ type: UPDATE_CONTACTNOTE_SUCCESS, payload: contactNote })
    })
  }
}


export const updateClientNote = ( clientNote, id ) => {
  return (dispatch) => {
    firebase.database().ref(id)
      .update( clientNote )
      .then(() => {
        dispatch({ type: UPDATE_CLIENTNOTE_SUCCESS, payload: clientNote })
    })
  }
}
