import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import '../styles/index.css';
import history from '../actions/history'
import RequireAuth from './auth/RequireAuth'
import SignIn from './auth/SignIn'
import SignOut from './auth/SignOut'
import Home from './Home'
import Brain from './Brain'
import Layout from './common/Layout'


class App extends Component {

  render() {
    return (
      <Router history={history}>
          <Layout>
            <Route path='/' exact component={RequireAuth(Home)} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signout' component={SignOut} />
            <Route path='/brain' component={RequireAuth(Brain)} />
          </Layout>
      </Router>
    );
  }
}

export default App;
