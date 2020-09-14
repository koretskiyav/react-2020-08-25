import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from './middlewares/logger';

import reducer from './reducer';
import uuid from './middlewares/uuid';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(uuid, logger))
);

export default store;
