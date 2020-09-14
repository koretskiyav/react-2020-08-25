import React from 'react';
import PropTypes from 'prop-types';
import ReviewForm from './review-form';
import Review from './review';
import styles from './reviews.module.css';

const Reviews = ({ reviews, restaurantUid }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review} review={review} />
      ))}
      <ReviewForm restaurantUid={restaurantUid} />
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Reviews;
