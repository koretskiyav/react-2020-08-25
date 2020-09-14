import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({ review, userName }) => {
  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {userName}
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
  rating: PropTypes.number.isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};

const mapStateToProps = (state, ownProps) => ({
  review: state.reviews[ownProps.id],
  userName: state.users[state.reviews[ownProps.id].userId].name,
});

export default connect(mapStateToProps)(Review);
