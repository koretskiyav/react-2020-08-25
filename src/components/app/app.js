import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';
import Error from '../error';
import RestaurantsPage from '../../pages/restaurants-page';
import { UserProvider } from '../../contexts/user';
import Thanks from '../thanks';

const App = () => {
  const [name, setName] = useState('Igor');

  useEffect(() => {
    setInterval(() => {
      // setName(Math.random().toString());
    }, 3000);
  }, []);

  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <Header />
        <Switch>
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route path="/error" component={Error} />
          <Route path="/thanks" component={Thanks} />
          <Redirect from="/" to="/restaurants" />
        </Switch>
      </UserProvider>
    </div>
  );
};

export default App;
