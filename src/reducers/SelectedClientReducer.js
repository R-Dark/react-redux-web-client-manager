import { CLIENT_SELECTED } from '../actions/types';


const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case CLIENT_SELECTED:
      return { ...state, clientItem };
    default:
      return state;
  }
}
