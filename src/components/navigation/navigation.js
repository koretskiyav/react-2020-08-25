import React from 'react';
import PropTypes from 'prop-types';
import styles from './navigation.module.css';
import Order from './order';
import { connect } from 'react-redux';
import { setActiveRestaurant } from '../../redux/actions';

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
    <Order />
  </div>
);

Navigation.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onRestaurantClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants.restaurants,
});

const mapDispatchToProps = {
  onRestaurantClick: setActiveRestaurant,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
