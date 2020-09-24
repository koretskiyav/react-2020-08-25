import { createContext } from 'react';

export const userContext = createContext({ id: 'uah', sum: '28' });
export const UserConsumer = userContext.Consumer;
export const UserProvider = userContext.Provider;
