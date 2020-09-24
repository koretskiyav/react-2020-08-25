import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';
import RestaurantsPage from '../../pages/restaurants-page';
import { UserProvider } from '../../contexts/user';
import { CurrencyProvider } from '../../contexts/currency';

const INITIAL_CURRENCY = { value: 1, name: 'USD', charCode: '$' };

const App = () => {
  const [name, setName] = useState('Igor');
  const [currency, setCurrency] = useState(INITIAL_CURRENCY);

  useEffect(() => {
    setInterval(() => {
      // setName(Math.random().toString());
    }, 3000);
  }, []);

  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <CurrencyProvider
          value={{
            currency,
            setCurrency,
            getAmount: (price) =>
              `${Math.round(price * currency.value)} ${currency.charCode}`,
          }}
        >
          <Header />
          <Switch>
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Route path="/error" render={() => <h1>Error Page</h1>} />
            <Route
              path="/submit/success"
              render={() => <h1>Thank you for your order!</h1>}
            />
            <Redirect from="/" to="/restaurants" />
            {/*<Route path="/" render={() => <div>404 - not found</div>} />*/}
          </Switch>
        </CurrencyProvider>
      </UserProvider>
    </div>
  );
};

export default App;
