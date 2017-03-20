import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// Unmounts my components from the DOM after 5 seconds
// setTimeout(() => {
// ReactDOM.unmountComponentAtNode(document.getElementById('root'));}, 5000);

