import { CLIENTS_FETCH_SUCCESS, SEARCH_CLIENT, NONE_SELECTED } from '../actions/types';
import _ from 'lodash';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLIENTS_FETCH_SUCCESS:
    const items = _.map(action.payload, (val, uid) => {
      return { ...val, uid }
    })
    // console.log(clients)
    return { ...state, items };
    case SEARCH_CLIENT:
    const clientItem = _.map(action.payload, (val, uid) => {
      return { ...val, uid }
    })
      return { ...state, clientItem };
    case NONE_SELECTED:
      return { ...state };
    default:
      return state;
  }
}
