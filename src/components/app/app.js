import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';
import RestaurantsPage from '../../pages/restaurants-page';
import Tabs from '../tabs';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/menu" component={Tabs} />
          <Route path="/reviews" component={Tabs} />
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route path="/" render={() => <div>404 - not found</div>} />
        </Switch>
      </div>
    );
  }
}
