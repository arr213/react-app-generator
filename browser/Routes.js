'use strict';

// NODE LIBRARIES
import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

// IMPORTED FILES
import HomeContainer from './components/home/HomeContainer';
import store from './redux/store';

// ROUTE ONENTER FUNCTIONS
const onHomeEnter = (next) => {
  console.log('Welcome to your new React-Redux app!');
}

// ROUTES COMPONENT
export default class Routes extends Component {

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/">
          <Route path="home" component={HomeContainer} onEnter={onHomeEnter} />
          <IndexRoute component={HomeContainer} onEnter={onHomeEnter} />
        </Route>
      </Router>
    );
  }
}
