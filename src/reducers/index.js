import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import authReducer from './AuthReducer'
import clientReducer from './ClientReducer'
import SelectedClientReducer from './SelectedClientReducer'


const rootReducer = combineReducers({
  form,
  auth: authReducer,
  clients: clientReducer,
  selectedclient: SelectedClientReducer
});

export default rootReducer;
