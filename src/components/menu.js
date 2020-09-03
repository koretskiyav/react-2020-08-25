import React from 'react';
import Product from './product';
import Restaurant from './restaurant';

export default function Menu(props) {
  return (
    <div>
      <Restaurant restaurant={props.activeRest} />
      {props.menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
