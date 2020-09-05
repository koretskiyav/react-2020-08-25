import React from 'react';
import Review from './review';
import styles from './reviews.module.css';
import PropTypes from 'prop-types';
import ReviewType from './review/review.type';

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(ReviewType)),
};

export default Reviews;
