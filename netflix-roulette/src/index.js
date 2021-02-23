import React from 'react';
import App from './app/app.component';

function startup() {
  const app = <App/>;

  const root = document.querySelector('.content');
  ReactModal.setAppElement(root);

  render(app, root);
}

startup();
