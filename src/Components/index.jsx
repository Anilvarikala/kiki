import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CardDataProvider } from './CardDataContext';

ReactDOM.render(
  <CardDataProvider>
    <App />
  </CardDataProvider>,
  document.getElementById('root')
);
