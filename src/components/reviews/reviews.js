import React from 'react';
import Review from './review';
import styles from './reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews} data-id="rewiews">
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
};


Reviews.propTypes = {

  reviews: PropTypes.array,

};

export default Reviews;
