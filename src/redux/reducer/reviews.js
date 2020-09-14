import { normalizedReviews } from '../../fixtures';
import { ADDREVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADDREVIEW:
      // Check for empty username/text (nothing will be added)
      if (payload.values.name === '' || payload.values.text === '')
        return reviews;
      return {
        ...reviews,
        [payload.values.reviewId]: {
          id: payload.values.reviewId,
          userId: payload.values.userId,
          text: payload.values.text,
          rating: payload.values.rate,
        },
      };
    default:
      return reviews;
  }
};
