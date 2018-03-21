import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createHashHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';

import rootReducer from 'redux/reducers/index';

const history = createHistory();
const historyMiddleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const loggerMiddleware = createLogger();
const middleware = composeEnhancers(applyMiddleware(thunk, historyMiddleware));

let store = createStore(
  combineReducers({
    rootReducer,
    router: routerReducer
  }),
  middleware,
);

export default store;
