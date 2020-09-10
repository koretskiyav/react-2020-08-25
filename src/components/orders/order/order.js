import React from 'react';
import { increment, decrement, clear } from '../../../redux/actions';
import { connect } from 'react-redux';

const Order = ({
  item: { id, price, name },
  amount,
  increment,
  decrement,
  clear,
}) => {
  return (
    <div>
      "{name}" {amount} x {price}$ = {price * amount}$
      <button onClick={() => increment(id)}>+</button>
      <button onClick={() => decrement(id)}>-</button>
      <button onClick={() => clear(id)}>x</button>
    </div>
  );
};

const mapDispatchToProps = {
  increment,
  decrement,
  clear,
};

export default connect(null, mapDispatchToProps)(Order);
