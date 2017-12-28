import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Nav from './nav';
import CoinTable from './coin_table';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Nav />
        <CoinTable />
      </MuiThemeProvider>
    );
  }
}

export default App;
