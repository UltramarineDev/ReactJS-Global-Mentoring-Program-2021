import React from 'react';
import App from './components/App';
import { render } from 'react-dom';

import './fontawesome';
render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
