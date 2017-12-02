import { CLIENT_SELECTED, UPDATE_OFFER_SUCCESS, UPDATE_STATUS_SUCCESS, UPDATE_ASSIGNMENT_SUCCESS, UPDATE_CONTACTNAME_SUCCESS, UPDATE_PHONENUMBER_SUCCESS, UPDATE_EMAIL_SUCCESS, UPDATE_CONTACTNOTE_SUCCESS, UPDATE_CLIENTNOTE_SUCCESS } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case CLIENT_SELECTED:
        return { ...state, clientInfo: action.payload }
      case UPDATE_OFFER_SUCCESS:
        return { ...state, offer: action.payload };
      case UPDATE_STATUS_SUCCESS:
        return { ...state, status: action.payload };
      case UPDATE_ASSIGNMENT_SUCCESS:
        return { ...state, assignment: action.payload };
      case UPDATE_CONTACTNAME_SUCCESS:
        return { ...state, name: action.payload };
      case UPDATE_PHONENUMBER_SUCCESS:
        return { ...state, phone: action.payload };
      case UPDATE_EMAIL_SUCCESS:
        return { ...state, email: action.payload };
      case UPDATE_CONTACTNOTE_SUCCESS:
        return { ...state, contactNote: action.payload };
      case UPDATE_CLIENTNOTE_SUCCESS:
        return { ...state, clientNote: action.payload };
    default:
      return state;
  }
}

// switch (action.type) {
//     case offerUpdate:
//       return console.log('test1');
//     case statusUpdate:
//       return console.log('test33');
//
// }
