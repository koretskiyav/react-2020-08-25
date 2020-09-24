import { createContext } from 'react';

export const currencyObj = {
  EUR: {
    value: 89,
    name: 'EUR',
  },
  RUB: {
    value: 77,
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
