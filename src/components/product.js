import React from 'react';
import counter from '../hocs/counter';

import minus from '../icons/minus.svg';
import Plus from '../icons/plus';

function Product(props) {
  const {
    count,
    decrement,
    increment,
    product: { name, price },
  } = props;

  return (
    <div>
      <p>{name}</p>
      <p>{price} $</p>
      <button onClick={decrement}>
        <img src={minus} alt="minus" />
      </button>
      {count}
      <button onClick={increment}>
        <Plus />
      </button>
    </div>
  );
}

export default counter(Product);
