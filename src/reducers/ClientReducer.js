import { CLIENTS_FETCH_SUCCESS, SEARCH_CLIENT_BY_NAME, SEARCH_CLIENT_BY_STATE, SEARCH_CLIENT_BY_STATUS, SEARCH_CLIENT_BY_ZIP, NONE_SELECTED } from '../actions/types';
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
    case SEARCH_CLIENT_BY_NAME:
    const clientItem = _.map(action.payload, (val, uid) => {
      return { ...val, uid }
    })
      return { ...state, clientItem };
    case SEARCH_CLIENT_BY_STATE:
    const clientItemByState = _.map(action.payload, (val, uid) => {
      return { ...val, uid }
    })
      return { ...state, clientItemByState };
      case SEARCH_CLIENT_BY_STATUS:
      const clientItemByStatus = _.map(action.payload, (val, uid) => {
        return { ...val, uid }
      })
        return { ...state, clientItemByStatus };
      case SEARCH_CLIENT_BY_ZIP:
      const clientItemByZip = _.map(action.payload, (val, uid) => {
        return { ...val, uid }
      })
        return { ...state, clientItemByZip };
    case NONE_SELECTED:
      return { ...state };
    default:
      return state;
  }
}
