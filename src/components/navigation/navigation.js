import React from 'react';
import PropTypes from 'prop-types';
import styles from './navigation.module.css';
import RestaurantType from '../restaurant/restaurant.type';

const Navigation = ({ restaurants, onRestaurantClick }) => (
  <div className={styles.list}>
    {restaurants.map(({ id, name }) => (
      <span
        key={id}
        className={styles.restaurant}
        onClick={() => onRestaurantClick(id)}
      >
        {name}
      </span>
    ))}
  </div>
);

Navigation.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape(RestaurantType)),
  onRestaurantClick: PropTypes.func,
};

export default Navigation;
