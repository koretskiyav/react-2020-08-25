import React from 'react';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({ user, text, rating }) => (
  <div className={styles.review} data-id="review">
    <div className={styles.content}>
      <div>
        <h4 className={styles.name} data-id="user">
          {user}
        </h4>
        <p className={styles.comment}>{text}</p>
      </div>
      <div className={styles.rate} data-id="rating">
        <Rate value={rating} />
      </div>
    </div>
  </div>
);

Review.defaultProps = {
  user: 'Anonymous',
};

Review.propTypes = {
  user: PropTypes.string.isRequired,
  text: PropTypes.string,
  rate: PropTypes.number,
};

export default Review;
