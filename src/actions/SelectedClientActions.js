import firebase from 'firebase'
import {reset} from 'redux-form';

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

let clientData
let index = 0
export function selectClient(clientInfo) {
  clientData = clientInfo
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
        dispatch(reset('offerupdate'));
    })
  }
}

export const updateStatus = ( statusUpdate, id ) => {
  return (dispatch) => {
    firebase.database().ref(id)
      .update( statusUpdate )
      .then(() => {
        dispatch({ type: UPDATE_STATUS_SUCCESS, payload: statusUpdate })
        dispatch(reset('statusupdate'));
    })
  }
}

export const updateAssignment = ( assignTo, id ) => {
  return (dispatch) => {
    firebase.database().ref(id)
      .update( assignTo )
      .then(() => {
        dispatch({ type: UPDATE_ASSIGNMENT_SUCCESS, payload: assignTo })
        dispatch(reset('assignmentupdate'));
    })
  }
}

export const updateContactName = ( contactName, id ) => {
  return (dispatch) => {
    firebase.database().ref(id)
      .update( contactName )
      .then(() => {
        dispatch({ type: UPDATE_CONTACTNAME_SUCCESS, payload: contactName })
        dispatch(reset('updatecontact'));
    })
  }
}

export const updatePhoneNumber = ( phoneNumber, id ) => {
  return (dispatch) => {
    firebase.database().ref(id)
      .update( phoneNumber )
      .then(() => {
        dispatch({ type: UPDATE_PHONENUMBER_SUCCESS, payload: phoneNumber })
        dispatch(reset('updatecontact'));
    })
  }
}

export const updateContactEmail = ( contactEmail, id ) => {
  return (dispatch) => {
    firebase.database().ref(id)
      .update( contactEmail )
      .then(() => {
        dispatch({ type: UPDATE_EMAIL_SUCCESS, payload: contactEmail })
        dispatch(reset('updatecontact'));
    })
  }
}

export const updateContactNote = ( contactNote, id ) => {
  return (dispatch) => {
    firebase.database().ref(id)
      .update( contactNote )
      .then(() => {
        dispatch({ type: UPDATE_CONTACTNOTE_SUCCESS, payload: contactNote })
        dispatch(reset('updatecontact'));
    })
  }
}


export const updateClientNote = ( clientNote, dateTime, id ) => {
  // console.log(clientData)
  let dt = dateTime.toString()
  // console.log(clientNote, dt, id)
  let item = { clientNote: clientNote.clientNote, dateTime: dt, id:id}
  clientData.clientNote['zzz' + id + index] = item
  index = index + 1
  return (dispatch) => {
    firebase.database().ref(id)
      .child( 'clientNote' ).push(item)
      .then(() => {
        dispatch({ type: UPDATE_CLIENTNOTE_SUCCESS, payload: clientData })
        dispatch(reset('addclientnote'));
    })
  }
}
