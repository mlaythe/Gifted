import React, { Component } from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, Redirect } from 'react-router';
import configureStore from '../store/configureStore';

import Welcome from '../components/Welcome';
import Signup from '../containers/SignupContainer'; 

const store = configureStore();

export default class Root extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={Welcome} />
          <Route path='/signup' component={Signup} />
          <Redirect path='*' to='/' />
        </Router>
      </Provider>
    );
  }
}
