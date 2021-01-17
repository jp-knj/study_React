import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cursor from './components/Cursor';

ReactDOM.render(
  <React.StrictMode>
    <Cursor/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
