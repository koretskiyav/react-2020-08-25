import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { connect } from 'react-redux';

const Restaurant = ({ restaurant, reviewsAll, id }) => {
  const { name, menu } = restaurant;

  const { averageRating, reviews } = useMemo(() => {
    const reviews = restaurant.reviews.map((review) => reviewsAll[review]);
    const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
    return { averageRating: Math.round(total / reviews.length), reviews };
  }, [reviewsAll, id]);
  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} /> },
    { title: 'Reviews', content: <Reviews reviews={reviews} id={id} /> },
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
    menu: PropTypes.array,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        rating: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  restaurant: state.restaurants[ownProps.id] || 0,
  reviewsAll: state.reviews,
});

export default connect(mapStateToProps)(Restaurant);
