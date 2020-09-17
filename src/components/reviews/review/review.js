import React from 'react';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';
import { connect } from 'react-redux';
import { reviewWitUserSelector } from '../../../redux/selectors';

//--
import Loader from '../loader';
import {
  reviewsListSelector,
  reviewsLoadingSelector,
  reviewsLoadedSelector,
} from '../../redux/selectors';
import { loadRewiews } from '../../redux/actions';

//--

const Review = ({ review: { user = 'Anonymous', text, rating, loadRewiews, loading, loaded } }) => (

  useEffect(() => {
    if (!loading && !loaded) loadRewiews();
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
</div>
);

Review.propTypes = {
  review: PropTypes.shape({
    user: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.number.isRequired,
  }),
};

export default

  connect(
    (state) => ({
      rewiews: rewiewsListSelector(state),
      loading: rewiewsLoadingSelector(state),
      loaded: rewiewsLoadedSelector(state),
    }),
    { loadRestaurants }
  )(Restaurants);


/* connect((state, props) => ({
  review: reviewWitUserSelector(state, props),
}))(Review); */
