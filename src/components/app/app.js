import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';
import Error from './error';
import UseCurrency from '../../hooks/use-currency';
import RestaurantsPage from '../../pages/restaurants-page';
import { UserProvider } from '../../contexts/user';

const App = ({ history }) => {
  const { setCurrencyNew, currency } = UseCurrency();

  useEffect(() => {
    setInterval(() => {
      // setName(Math.random().toString());
    }, 3000);
  }, []);
  console.log(currency);
  return (
    <div>
      <UserProvider value={{ setCurrencyNew, currency }}>
        <Header />
        <Switch>
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={RestaurantsPage} />

          <Route path="/error" component={Error} />
          <Route
            path="/thankfulpage"
            render={() => <h1>Спасибо за заказ</h1>}
          />
          <Redirect from="/" to={`/restaurants`} />
          <Route path="/" render={() => <div>404 - not found</div>} />
        </Switch>
      </UserProvider>
    </div>
  );
};

export default App;
