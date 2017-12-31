import React, { Component } from 'react';
import NavContainer from '../containers/nav_container';
import CoinTableContainer from '../containers/coin_table_container';


class App extends Component {
  render() {
    return (
      <div>
        <NavContainer />
        <CoinTableContainer />
      </div>
    );
  }
}

export default App;
