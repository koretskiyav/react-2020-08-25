import React from 'react';
import styles from './total.module.css';
/* import PropTypes from 'prop-types'; */
/* import { connect } from 'react-redux'; */

const Total = ({ nameTotal, price, count, common }) => {
  return (
    <div className={styles.total}>
      <div>{nameTotal}</div>
      <div></div>
      <div>{price}</div>
      <div>{count}</div>
      <div>{common}</div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

/* Navigation.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onRestaurantClick: PropTypes.func.isRequired,
}; */

/* const mapStateToProps = (state) => ({
  order: state.order,
  restaurants: state.restaurants.restaurants,
}); */

export default Total; //connect(mapStateToProps)();
