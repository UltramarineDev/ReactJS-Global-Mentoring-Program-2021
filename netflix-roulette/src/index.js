import React from 'react';
import App from './app/App';

function startup() {
  const app = <App/>;

  const root = document.querySelector('.content');
  ReactModal.setAppElement(root);

  render(app, root);
}

startup();