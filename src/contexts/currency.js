import { createContext } from 'react';
import { USD } from '../redux/constants';

export const currencyContext = createContext({ currency: {sign: '$', exchange: USD} });
export const CurrencyConsumer = currencyContext.Consumer;
export const CurrencyProvider = currencyContext.Provider;
