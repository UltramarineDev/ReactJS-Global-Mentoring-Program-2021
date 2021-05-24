/* eslint-disable no-underscore-dangle */
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App/App';
import getStore from './components/store';
import './fontawesome';
import './index.scss';

const preloadedState = window.__INITIAL_STATE__;
delete window.__INITIAL_STATE__;

const store = getStore(preloadedState);

hydrate(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
