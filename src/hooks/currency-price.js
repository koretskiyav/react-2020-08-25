import React, { useContext } from 'react';
import { currencyContext } from '../contexts/currency';

export const CurrencyPrice = (price) => {
  const { currency, setCurrency, value } = useContext(currencyContext) || {
    currency: {},
    value: 'USD',
    setCurrency: () => {},
  };

  return (
    <span>{`${price * currency[value].value}  ${currency[value].name}`}</span>
  );
};
