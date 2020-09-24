import React, { createContext, useState } from 'react';
import { currencyList } from '../hooks/use-currency';

export const CurrencyContext = createContext();
CurrencyContext.displayName = 'CurrencyContext';
export const CurrencyConsumer = CurrencyContext.Consumer;

export const CurrencyProvider = (props) => {
  const [currency, setCurrency] = useState(currencyList[0]);
  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {props.children}
    </CurrencyContext.Provider>
  );
};
