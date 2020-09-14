import React, { useMemo } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';

const Restaurant = ({ restaurant, fullReviews }) => {
  const { name, menu, reviews } = restaurant;

  let ratings = reviews.map((id) => fullReviews[id].rating);

  const averageRating =
    ratings.reduce((a, rating) => a + rating) / ratings.length;

  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} /> },
    {
      title: 'Reviews',
      content: <Reviews reviews={reviews} restaurantId={restaurant.id} />,
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
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    menu: PropTypes.arrayOf(PropTypes.string),
    reviews: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  fullReviews: state.reviews,
});

export default connect(mapStateToProps)(Restaurant);
