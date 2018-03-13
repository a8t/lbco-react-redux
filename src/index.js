import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), root);

registerServiceWorker();
