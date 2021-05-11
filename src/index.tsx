import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom';
import RouterApp from './router';
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>,
  document.getElementById('root')
);
