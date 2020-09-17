import React from 'react';
import PropTypes from 'prop-types';
import ReviewForm from './review-form';
import Review from './review';
import styles from './reviews.module.css';
import { connect } from 'react-redux';
import {
  reviewsWithUsersListSelector,
  reviewsLoadingSelector,
  reviewsLoadedSelector,
} from '../../redux/selectors';
import Loader from '../loader';

const Reviews = ({ reviews, restaurantId, loading, loaded }) => {
  if (loading || !loaded) return <Loader />;
  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.string,
      text: PropTypes.string,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default connect((state, ownProps) => ({
  reviews: reviewsWithUsersListSelector(state, { id: ownProps.restaurantId }),
  loading: reviewsLoadingSelector(state),
  loaded: reviewsLoadedSelector(state),
}))(Reviews);
