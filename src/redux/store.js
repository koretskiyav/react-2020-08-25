import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from './middlewares/logger';
import generateId from './middlewares/generateId';
import { ADD_REVIEW } from './constants';

import reducer from './reducer';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      logger,
      generateId('userId', ADD_REVIEW),
      generateId('reviewId', ADD_REVIEW)
    )
  )
);

export default store;
