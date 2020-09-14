import React from 'react';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';
import { connect } from 'react-redux';
import { reviewSelector, usersSelector } from '../../../redux/selectors';

const Review = ({ review, users }) => {
  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {users[review.userId].name}
          </h4>
          <p className={styles.comment} data-id="review-text">
            {review.text}
          </p>
        </div>
        <div className={styles.rate}>
          <Rate value={review.rating} />
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
  // rating: PropTypes.number.isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};

const mapStateToProps = (state, ownProps) => ({
  review: reviewSelector(state, ownProps),
  users: usersSelector(state),
});

export default connect(mapStateToProps)(Review);
