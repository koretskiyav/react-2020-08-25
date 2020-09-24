import { createContext } from 'react';
export const currencyObj = {
  UAH: {
    value: 28,
    name: 'UAH',
  },
  RUB: {
    value: 76,
    name: 'RUB',
  },
  USD: {
    value: 1,
    name: 'USD',
  },
};
export const currencyContext = createContext({ currency: currencyObj });
export const CurrencyConsumer = currencyContext.Consumer;
export const CurrencyProvider = currencyContext.Provider;
