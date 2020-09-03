import React from 'react';
import Menu from './menu';
import Reviews from './reviews';

export default function Restaurant(props) {
  return (
    <div style={{ display: 'flex' }}>
      <Menu menu={props.activeRestaurant.menu} />
      <Reviews reviews={props.activeRestaurant.reviews} />
    </div>
  );
}
