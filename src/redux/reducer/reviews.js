import { normalizedReviews } from '../../fixtures';

/* export default (reviews = defaultReviews, action) => {
  const { type } = action;

  switch (type) {
    default:
      return reviews;
  }
};
 */

//-----

const defaultReviews = normalizedReviews.reduce(
  (acc, rewiew) => ({ ...acc, [rewiew.id]: rewiew }),
  {}
);

export default (rewiews = defaultReviews, action) => {
  const { type } = action;

  switch (type) {
    default:
      return rewiews;
  }
};
