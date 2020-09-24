import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RestaurantsPage from '../pages/restaurants-page';
import SuccessPage from '../pages/success-page';
import ErrorPage from '../pages/error-page';
import Header from '../header';
import Basket from '../basket';
import { Provider as UserProvider } from '../../contexts/user';

const App = () => {
  const [userName, setName] = useState('Ivan');

  useEffect(() => {
    // setInterval(() => setName(Math.random().toString()), 3000);
  }, []);

  return (
    <div>
      <UserProvider value={{ userName, setName }}>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/restaurants" />
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route path="/order-success" component={SuccessPage} />
          <Route path="/order-error" component={ErrorPage} />
          <Route path="/error" render={() => <h1>Error Page</h1>} />
          <Route path="/" render={() => <div>404 - not found</div>} />
        </Switch>
      </UserProvider>
    </div>
  );
};
export default App;
