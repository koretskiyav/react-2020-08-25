import React from 'react';

const Order = ({ item: { price, name }, amount }) => {
  return (
    <div>
      "{name}" {amount} x {price}$ = {price * amount}$
    </div>
  );
};

export default Order;
