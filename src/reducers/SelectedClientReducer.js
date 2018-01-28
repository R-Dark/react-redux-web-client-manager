import { CLIENT_SELECTED, UPDATE_OFFER_SUCCESS, UPDATE_STATUS_SUCCESS, UPDATE_ASSIGNMENT_SUCCESS, UPDATE_CONTACTNAME_SUCCESS, UPDATE_PHONENUMBER_SUCCESS, UPDATE_EMAIL_SUCCESS, UPDATE_CONTACTNOTE_SUCCESS, UPDATE_CLIENTNOTE_SUCCESS, SEARCH_RESET } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case CLIENT_SELECTED:
      // console.log(action.payload)
      let clientNotes = action.payload.clientNote == undefined ? null : convertToArray(action.payload.clientNote)
        return { 
          ...state, 
          clientInfo: action.payload,  
          status: undefined, 
          offer: undefined, 
          assignment: undefined, 
          phone: undefined,
          name: undefined,
          contactNote: undefined,
          clientNote: clientNotes,
          email: undefined
        }
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
      let updatedClientNotes = action.payload.clientNote == undefined ? null : convertToArray(action.payload.clientNote)
        return { ...state, clientNote: updatedClientNotes };
      // case SEARCH_RESET:
      //   return INITIAL_STATE;
    default:
      return state;
  }
}


let convertToArray = function(obj) {
  // console.log(obj)
  let arr = []
  let keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]].id = keys[i]
    arr.push(obj[keys[i]])
  }
  // console.log(arr)
  return arr
}

