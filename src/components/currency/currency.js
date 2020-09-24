import React, { useContext } from 'react';
import { currencyContext } from '../../contexts/currency';

const Currency = () => {
  const { сurrency, setCurrency } = useContext(currencyContext);

  return (
    <>
      <select onChange={() => setCurrency('1')}>
        <option value="28">UAH</option>
        <option value="76">RUB</option>
        <option value="1">USD</option>
      </select>
      <p>{сurrency}</p>
    </>
  );
};
export default Currency;
