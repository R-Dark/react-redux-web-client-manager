import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import firebase from 'firebase'
import history from '../actions/history'
import SignIn from './auth/SignIn'
import Home from './Home'
import Brain from './Brain'
import '../styles/index.css';
import Layout from './common/Layout'


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBQOhwOXzIiD05046Z7VSm6p9NV717ir80",
      authDomain: "bellatorum-app.firebaseapp.com",
      databaseURL: "https://bellatorum-app.firebaseio.com",
      projectId: "bellatorum-app",
      storageBucket: "bellatorum-app.appspot.com",
      messagingSenderId: "1069441860314"
  };

  firebase.initializeApp(config);
}
  render() {
    return (
      <Router history={history}>
          <Layout>
            <Route path='/' exact component={Home} />
            <Route path='/signin' component={SignIn} />
            <Route path='/brain' component={Brain} />
          </Layout>
      </Router>
    );
  }
}

export default App;
