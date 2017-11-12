import { CLIENTS_FETCH_SUCCESS } from '../actions/types';
import _ from 'lodash';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLIENTS_FETCH_SUCCESS:
    const items = _.map(action.payload, (val, uid) => {
      return { ...val, uid }
    })
    // console.log(clients)
    return { ...state, items }
    default:
      return state;
  }
}
