import React from 'react';
import PropTypes from 'prop-types';
import ReviewForm from './review-form';
import Review from './review';
import styles from './reviews.module.css';

const Reviews = ({ restaurantId, reviews }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Reviews;
