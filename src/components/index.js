import React, { Component } from 'react';
import NavContainer from '../containers/general/nav_container';
import CoinTableContainer from '../containers/index/coin_table_container';


class Index extends Component {
  render() {
    return (
      <div>
        <NavContainer />
        <CoinTableContainer />
      </div>
    );
  }
}

export default Index;
