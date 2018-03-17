import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from 'redux/reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const loggerMiddleware = createLogger();
const middleware = composeEnhancers(applyMiddleware(thunk));


let store = createStore(
  rootReducer,
  middleware,
);

export default store;
