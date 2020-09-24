import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';
import RestaurantsPage from '../../pages/restaurants-page';
import { UserProvider } from '../../contexts/user';
import { CurrencyProvider, currencyObj } from '../../contexts/currency';

const App = () => {
  const [name, setName] = useState('Igor');
  const [currency, setCurrency] = useState('RUB');

  useEffect(() => {
    setInterval(() => {
      // setName(Math.random().toString());
    }, 3000);
  }, []);

  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <CurrencyProvider
          value={{ currency: currencyObj, value: currency, setCurrency }}
        >
          <Header />
          <Switch>
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Redirect exact from="/" to={`/restaurants/`} />
            <Route path="/error" render={() => <h1>Error Page</h1>} />
            <Route path="/" render={() => <div>404 - not found</div>} />
          </Switch>
        </CurrencyProvider>
      </UserProvider>
    </div>
  );
};

export default App;
