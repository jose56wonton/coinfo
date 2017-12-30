import React, { Component } from 'react';
import Nav from './nav';
import CoinTableContainer from '../containers/coin_table_container';


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <CoinTableContainer />
      </div>
    );
  }
}

export default App;
