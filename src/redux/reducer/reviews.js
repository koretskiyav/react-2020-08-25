import { ADD_REVIEW } from '../constants';
//import { normalizedReviews } from '../../fixtures';
import { arrToMap } from '../utils';
import { productSelector } from '../selectors';
import produce from 'immer';


const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};


export default (state = arrToMap(normalizedReviews), action) => {
  const { type, payload, reviewId, userId } = action;

  switch (type) {
    case ADD_REVIEW:
      const { text, rating } = payload.review;
      return produce(state, (draft) => {
        draft[payload.rewiewsId].rewiews.push(rewiewId);
      }


     /*  {
        ...state,
        [reviewId]: { id: reviewId, userId, text, rating },
      }; */
    default:
      return state;
  }
};
