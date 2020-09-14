import { normalizedReviews } from '../../fixtures';
import { ADDREVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, review } = action;

  switch (type) {
    case ADDREVIEW:
      let { id, userId, text, rate: rating } = review;
      return {
        ...reviews,
        [id]: { id: id, userId, text, rating },
      };
    default:
      return reviews;
  }
};
