import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Task1 from "./react-create-element";
import Task2 from "./react-component";
import Task3 from "./react-pure-component";
import Task4 from "./react-functional-component";

ReactDOM.render(
  <React.StrictMode>
    <Task1 />
    <Task2 />
    <Task3 />
    <Task4 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
