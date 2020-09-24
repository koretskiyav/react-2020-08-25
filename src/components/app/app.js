import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';
import RestaurantsPage from '../../pages/restaurants-page';
import RedirectPage from '../../pages/redirect-page';
import { UserProvider } from '../../contexts/user';
import { CurrencyProvider } from '../../contexts/currency';
import { USD } from '../../redux/constants';

const App = () => {
  const [name, setName] = useState('Igor');
  const [currency, setCurrency] = useState({sign: '$', exchange: USD});

  useEffect(() => {
    setInterval(() => {
      // setName(Math.random().toString());
    }, 3000);
  }, []);

  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <CurrencyProvider value = {{currency, setCurrency}}>
          <Header />
          <Switch>
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Route path="/error" render={() => <h1>Error Page</h1>} />
            <Route path="/" component={RedirectPage} />
          </Switch>
        </CurrencyProvider>
      </UserProvider>
    </div>
  );
};

export default App;
