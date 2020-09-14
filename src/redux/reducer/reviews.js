import { normalizedReviews } from '../../fixtures';
import { CREATE_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  switch (action.type) {
    case CREATE_REVIEW: {
      const { newIds } = action;
      const { reviewData, userData } = action.payload;

      const newReview = {
        id: newIds[0],
        userId: userData.id || newIds[1],
        text: reviewData.text,
        rating: reviewData.rate,
      };

      const newReviews = { ...reviews };
      newReviews[action.newIds[0]] = newReview;
      return newReviews;
    }

    default: {
      return reviews;
    }
  }
};
