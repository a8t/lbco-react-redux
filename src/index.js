import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/configureStore';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
), root);

registerServiceWorker();
