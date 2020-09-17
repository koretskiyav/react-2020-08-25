import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';
import { connect } from 'react-redux';
import {
  usersSelector,
  reviewWitUserSelector,
  selectUsersLoaded,
  selectUsersLoading,
} from '../../../redux/selectors';
import Loader from '../../loader';
import { loadUsers } from '../../../redux/actions';

const Review = ({
  review: { user = 'Anonymous', text, rating, loading, loaded, loadUsers },
}) => {
  useEffect(() => {
    if (!loading && !loaded) loadUsers();
  }, []); // eslint-disable-line

  if (loading || !loaded) return <Loader />;

  <div className={styles.review} data-id="review">
    <div className={styles.content}>
      <div>
        <h4 className={styles.name} data-id="review-user">
          {user}
        </h4>
        <p className={styles.comment} data-id="review-text">
          {text}
        </p>
      </div>
      <div className={styles.rate}>
        <Rate value={rating} />
      </div>
    </div>
  </div>;
};

Review.propTypes = {
  review: PropTypes.shape({
    user: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.number.isRequired,
  }),
};

// export default connect((state, props) => ({
//   review: reviewWitUserSelector(state, props),
// }))(Review);

export default connect(
  (state) => ({
    usersLoading: selectUsersLoading(state),
    usersLoaded: selectUsersLoaded(state),
    users: usersSelector(state),
    // review: reviewWitUserSelector(state, props),
  }),
  {
    loadUsers,
  }
)(Review);
