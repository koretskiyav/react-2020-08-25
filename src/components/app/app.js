import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';
import RestaurantsPage from '../../pages/restaurants-page';
import { UserProvider } from '../../contexts/user';
import { CurrencyProvider } from '../../contexts/currency';

const App = () => {
  const [name, setName] = useState('Igor');

  useEffect(() => {
    setInterval(() => {
      // setName(Math.random().toString());
    }, 3000);
  }, []);

  return (
    <div>
      <CurrencyProvider>
        <UserProvider value={{ name, setName }}>
          <Header />
          <Switch>
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Route
              path="/error"
              render={(state) => (
                <>
                  <h1>Error Page</h1>
                  <h2>{state.location.state}</h2>
                </>
              )}
            />
            <Route
              path="/success"
              render={(state) => <h1>{state.location.state}</h1>}
            />
            <Redirect to="/restaurants" />
            {/* <Route path="/" render={() => <div>404 - not found</div>} /> */}
          </Switch>
        </UserProvider>
      </CurrencyProvider>
    </div>
  );
};

export default App;
