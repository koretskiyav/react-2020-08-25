import React from 'react';
import Product from './product';

export default function Menu(props) {
  return (
    <div style={{float: 'left', marginRight: '1em'}}>
      <h2>Products: </h2>
      {props.menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
