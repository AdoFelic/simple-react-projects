import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { createLogger } from "redux-logger";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;
  const logger = createLogger();
  const enhancers = composeEnhancers(applyMiddleware(thunk, logger));
  return createStore(reducer, initialState, enhancers);
}
