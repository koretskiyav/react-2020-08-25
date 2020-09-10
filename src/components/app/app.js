import React, { PureComponent } from 'react';
import Restaurants from '../restaurants';
import Header from '../header';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Restaurants />
      </div>
    );
  }
}

export default App;
