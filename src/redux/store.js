import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from './middlewares/logger';
import uuid from './middlewares/generateId';
import reducer from './reducer';

const enhancer = applyMiddleware(logger, uuid);

const store = createStore(
  reducer,
  enhancer
  // composeWithDevTools(applyMiddleware(logger, uuid))
  // composeWithDevTools(enhancer)
);

export default store;
