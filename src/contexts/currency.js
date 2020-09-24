import React, { createContext, useState } from 'react';

export const CurrencyContext = createContext();
CurrencyContext.displayName = 'CurrencyContext';
export const CurrencyConsumer = CurrencyContext.Consumer;

const valueAfterFormat = {
  RUB: (value) => value * 77.12,
  USD: (value) => value,
  EUR: (value) => value / 0.86,
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
  const [currency, setCurrency] = useState(currencyList[1]);
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
