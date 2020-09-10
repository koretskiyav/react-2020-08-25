import React from 'react';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Navigation from '../navigation';
import { connect } from 'react-redux';

const Restaurants = ({ setActiveRestaurant }) => {
  return (
    <div>
      <Navigation />
      <Restaurant />
    </div>
  );
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants.restaurants,
});

export default connect(mapStateToProps)(Restaurants);
