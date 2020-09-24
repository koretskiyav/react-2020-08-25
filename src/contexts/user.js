// import { createContext } from 'react';

// export const userContext = createContext({ name: 'default user' });
// export const UserConsumer = userContext.Consumer;
// export const UserProvider = userContext.Provider;
import { createContext } from 'react';

const context = createContext('default user');

export const { Provider, Consumer } = context;

export default context;
