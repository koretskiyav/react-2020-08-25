import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { Link, Route } from 'react-router-dom';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { connect } from 'react-redux';
import { averageRatingSelector } from '../../redux/selectors';

const Restaurant = ({ id, name, menu, reviews, averageRating }) => {
  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>

      <Link to={`/restaurant/${id}/menu`}>Menu</Link>
      <Link to={`/restaurant/${id}/reviews`}>Reviews</Link>

      <Route
        path="/restaurants/:restId/menu"
        render={(menu, id) => <Menu menu={menu} restaurantId={id} />}
      />
      <Route
        path="/restaurants/:restId/reviews"
        render={(reviews, id) => (
          <Reviews reviews={reviews} restaurantId={id} />
        )}
      />
    </div>
  );
};

Restaurant.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  menu: PropTypes.array,
  reviews: PropTypes.array,
  averageRating: PropTypes.number,
};

export default connect(
  createStructuredSelector({
    averageRating: averageRatingSelector,
  })
)(Restaurant);
