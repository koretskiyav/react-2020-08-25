import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';
import RestaurantsPage from '../../pages/restaurants-page';
import { UserProvider } from '../../contexts/user';
import { CurrencyProvider } from '../../contexts/currency';
import NotFound from '../404/404';
import Error from '../error/error';
const App = () => {
  const [name, setName] = useState('Igor');
  const [currency, setCurrency] = useState('1');

  useEffect(() => {
    setInterval(() => {
      // setName(Math.random().toString());
    }, 3000);
  }, []);

  return (
    <div>
      <CurrencyProvider value={{ currency, setCurrency }}>
        <UserProvider value={{ name, setName }}>
          <Header />
          <Switch>
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Redirect exact from="/" to={`/restaurants/`} />
            <Route path="/accepted" render={() => <h1>Спасибо за заказ</h1>} />
            <Route path="/error" component={Error} />
            <Route path="/" render={() => <NotFound message="Not Found" />} />
          </Switch>
        </UserProvider>
      </CurrencyProvider>
    </div>
  );
};

export default App;
