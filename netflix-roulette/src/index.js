import React from 'react';
import App from './components/App/App';
import { render } from 'react-dom';

import './fontawesome';
import './index.scss';

render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
