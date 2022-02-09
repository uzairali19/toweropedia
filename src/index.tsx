import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './pages/App';
import store from './redux/configStore';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
