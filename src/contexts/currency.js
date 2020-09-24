import { createContext } from 'react';

export const currencyContext = createContext('');
export const CurrencyConsumer = currencyContext.Consumer;
export const CurrencyProvider = currencyContext.Provider;
