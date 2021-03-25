import React from 'react';
import App from './components/App/App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './components/store';
import './fontawesome';
import './index.scss';

const store = configureStore();

render(
  <React.StrictMode> 
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
