import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { connect } from 'react-redux';
import {
  averageRatingSelector,
  loadedByRestaurant,
} from '../../redux/selectors';
import { loadProducts, loadReviews } from '../../redux/actions';

const Restaurant = ({
  id,
  name,
  averageRating,
  loadProducts,
  loadReviews,
  loadedByRestaurant,
}) => {
  useEffect(() => {
    if (!loadedByRestaurant.includes(id)) {
      loadProducts(id);
      loadReviews(id);
    }
  }, [id]); // eslint-disable-line

  const tabs = [
    { title: 'Menu', content: <Menu restaurantId={id} /> },
    {
      title: 'Reviews',
      content: <Reviews restaurantId={id} />,
    },
  ];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <Tabs tabs={tabs} />
    </div>
  );
};

Restaurant.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  menu: PropTypes.array,
  averageRating: PropTypes.number,
};

export default connect(
  (state, ownProps) => ({
    averageRating: averageRatingSelector(state, { id: ownProps.id }),
    loadedByRestaurant: loadedByRestaurant(state),
  }),
  {
    loadProducts,
    loadReviews,
  }
)(Restaurant);
