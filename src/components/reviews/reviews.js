import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReviewForm from './review-form';
import Review from './review';
import styles from './reviews.module.css';

import { loadReviews } from '../../redux/actions';
import {
  reviewsLoadedSelector,
  reviewsLoadingSelector,
} from '../../redux/selectors';
import Loader from '../loader';

const Reviews = ({ reviews, restaurantId, loadReviews, loading, loaded }) => {
  useEffect(() => {
    if (!loading && !loaded) loadReviews(restaurantId);
  }, []); // eslint-disable-line

  if (loading || !loaded) return <Loader />;

  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} id={id} />
      ))}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect(
  (state, props) => ({
    loading: reviewsLoadingSelector(state),
    loaded: reviewsLoadedSelector(state, props),
  }),
  { loadReviews }
)(Reviews);
