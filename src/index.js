import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk'
import firebase from 'firebase'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './styles/index.css';
import App from './components/App';
import reducers from './reducers';
import { AUTH_USER } from './actions/types'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers)

const config = {
  apiKey: "AIzaSyBQOhwOXzIiD05046Z7VSm6p9NV717ir80",
  authDomain: "bellatorum-app.firebaseapp.com",
  databaseURL: "https://bellatorum-app.firebaseio.com",
  projectId: "bellatorum-app",
  storageBucket: "bellatorum-app.appspot.com",
  messagingSenderId: "1069441860314"
};

firebase.initializeApp(config);

if (localStorage.token) {
  store.dispatch({ type: AUTH_USER })
}


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
