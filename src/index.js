import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Records from './Records';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div><Records /><App/></div>,
  document.getElementById('root'));
