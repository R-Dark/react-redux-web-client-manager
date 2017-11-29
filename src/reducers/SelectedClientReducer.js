import { CLIENT_SELECTED, UPDATE_OFFER_SUCCESS, UPDATE_STATUS_SUCCESS } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case CLIENT_SELECTED:
        return { ...state, clientInfo: action.payload }
      case UPDATE_OFFER_SUCCESS:
        return { ...state };
      case UPDATE_STATUS_SUCCESS:
        return { ...state };
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
