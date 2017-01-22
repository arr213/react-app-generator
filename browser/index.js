'use strict';

// NODE LIBRARIES
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// IMPORTED FILES
import Routes from './Routes';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);
