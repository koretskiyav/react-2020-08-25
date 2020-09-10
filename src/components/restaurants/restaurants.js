import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Navigation from '../navigation';
import Basket from '../basket';

const Restaurants = ({ restaurants }) => {
  const [activePage, setActivePage] = useState({
    restaurant: restaurants[0].id,
    basket: false,
  });

  const activeRestaurant = useMemo(
    () => restaurants.find(({ id }) => id === activePage.restaurant),

    [activePage.restaurant, restaurants]
  );

  const products = useMemo(
    () => restaurants.reduce((sum, { menu }) => (sum = [...sum, ...menu]), []),

    [activePage.basket, restaurants]
  );

  return (
    <div>
      <Navigation
        restaurants={restaurants}
        setActivePage={setActivePage}
        activePage={activePage}
      />
      {activePage.basket ? (
        <Basket products={products} />
      ) : (
        <Restaurant restaurant={activeRestaurant} />
      )}
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

export default Restaurants;
