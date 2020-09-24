import React, { createContext, useState } from 'react';

export const CurrencyContext = createContext();
CurrencyContext.displayName = 'CurrencyContext';
export const CurrencyConsumer = CurrencyContext.Consumer;

const valueAfterFormat = {
  RUB: (value) => value,
  USD: (value) => value / 77.12,
  EUR: (value) => value / 89.99,
};

const currencyList = Object.keys(valueAfterFormat);

const getCurrency = (currency) => (value) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency,
  }).format(
    valueAfterFormat[currency] ? valueAfterFormat[currency](value) : value
  );
};

export const CurrencyProvider = (props) => {
  const [currency, setCurrency] = useState(currencyList[0]);
  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        getCurrency: getCurrency(currency),
        currencyList,
      }}
    >
      {props.children}
    </CurrencyContext.Provider>
  );
};
