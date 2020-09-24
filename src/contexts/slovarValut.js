import { createContext } from 'react';

export const ValuteContext = createContext({ name: 'RUB' });
export const ValuteConsumer = valuteContext.Consumer;
export const ValuteProvider = valuteContext.Provider;
