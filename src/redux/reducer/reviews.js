import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW: {
      const { reviewUid, userUid, rate, text } = payload;

      return {
        [reviewUid]: {
          id: reviewUid,
          rating: rate,
          text: text,
          userId: userUid,
        },
        ...reviews,
      };
    }

    default:
      return reviews;
  }
};
