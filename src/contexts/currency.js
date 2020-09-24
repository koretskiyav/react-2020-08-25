import { createContext } from 'react';

export const currencyContext = createContext({ сurrency: '$' });
export const CurrencyConsumer = currencyContext.Consumer;
export const CurrencyProvider = currencyContext.Provider;
