import React from 'react';
import PropTypes from 'prop-types';
import styles from './navigation.module.css';

const Navigation = ({ restaurants, setActivePage, activePage }) => (
  <div className={styles.list}>
    {restaurants.map(({ id, name }) => (
      <span
        key={id}
        className={styles.restaurant}
        onClick={() => setActivePage({ restaurant: id })}
      >
        {name}
      </span>
    ))}
    <span
      className={styles.restaurant}
      onClick={() =>
        setActivePage({ restaurant: activePage.restaurant, basket: true })
      }
    >
      Basket
    </span>
  </div>
);

Navigation.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  setActivePage: PropTypes.func.isRequired,
};

export default Navigation;
