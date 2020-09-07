import React from 'react';

import Rate from '../../rate';
import styles from './review.module.css';
import PropTypes, { number, string } from 'prop-types';

const Review = ({ user, text, rating }) => (
  <div className={`${styles.review} review-test`}>
    <div className={styles.content}>
      <div>
        <h4 className={styles.name}>{user}</h4>
        <p className={styles.comment}>{text}</p>
      </div>
      <div className={styles.rate}>
        <Rate value={rating} />
      </div>
    </div>
  </div>
);

Review.propTypes = {
  user: string,
  text: string.isRequired,
  rating: number.isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};

export default Review;
