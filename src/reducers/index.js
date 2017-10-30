import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import authReducer from './AuthReducer'
import clientReducer from './ClientReducer'


const rootReducer = combineReducers({
  form,
  auth: authReducer,
  clients: clientReducer
});

export default rootReducer;
