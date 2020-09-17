import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReviewForm from './review-form';
import Review from './review';
import styles from './reviews.module.css';

import { loadReviews } from '../../redux/actions';
import Loader from '../loader';
import {
  reviewsLoadedSelector,
  reviewsLoadingSelector,
  loadedReviewsCheckSelector,
} from '../../redux/selectors';

const Reviews = ({
  reviews,
  restaurantId,
  loadReviews,
  loading,
  loaded,
  alreadyLoadedReviews,
}) => {
  useEffect(() => {
    !alreadyLoadedReviews && loadReviews(restaurantId);
  }, [restaurantId]); // eslint-disable-line

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

const mapStateToProps = (state) => ({
  alreadyLoadedReviews: loadedReviewsCheckSelector(state),
  loading: reviewsLoadingSelector(state),
  loaded: reviewsLoadedSelector(state),
});

export default connect(mapStateToProps, { loadReviews })(Reviews);
