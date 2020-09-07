import React from 'react';
import styles from './navigation.module.css';
import PropTypes, { string } from 'prop-types';
import Restaurant from '../restaurant';

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
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: string,
      name: string,
    })
  ),
  onRestaurantClick: PropTypes.func.isRequired,
};

export default Navigation;
