import React, { useContext } from 'react';
import { currencyContext } from '../../contexts/currency';

const Currency = () => {
  const { currency, setCurrency, value } = useContext(currencyContext) || {
    currency: {},
    value: 'USD',
    setCurrency: () => {},
  };
  return (
    <>
      <select
        className="selector-currency"
        onChange={(e) => {
          e.preventDefault();
          setCurrency(e.currentTarget.value);
        }}
      >
        {Object.keys(currency).map((el, index) => {
          return (
            <option key={el} value={el} selected={value === el}>
              {currency[el].name}
            </option>
          );
        })}
      </select>
    </>
  );
};
export default Currency;
