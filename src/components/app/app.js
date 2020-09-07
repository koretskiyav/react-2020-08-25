import React, { PureComponent } from 'react';
import Restaurants from '../restaurants';
import PropTypes from 'prop-types';

import Header from '../header';

export default class App extends PureComponent {
  static propTypes = {
    restaurants: PropTypes.array.isRequired,
  };
  render() {
    return (
      <div>
        <Header />
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}
