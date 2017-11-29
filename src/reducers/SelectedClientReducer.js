import { CLIENT_SELECTED, UPDATE_OFFER_SUCCESS } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case CLIENT_SELECTED:
        return { ...state, clientInfo: action.payload }
      case UPDATE_OFFER_SUCCESS:
        return { ...state };
    default:
      return state;
  }
}
