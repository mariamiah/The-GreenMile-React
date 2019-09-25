import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import store from './Store';
import Routes from './routes/index';
import './assets/css/style.css';


ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>, document.getElementById('root'),
);
