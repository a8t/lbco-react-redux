import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "redux/reducers/index";

const loggerMiddleware = createLogger();
const middleware = applyMiddleware(thunk, loggerMiddleware);

let store = createStore(rootReducer, middleware);

export default store;
