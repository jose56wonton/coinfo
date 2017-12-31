import React, { Component } from 'react';
import CoinTableRow from '../components/coin_table_row';
import {withRouter} from 'react-router';
class CoinTableRowContainer extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(symbol){
    this.props.history.push(`/coin/${symbol}`);
  }
  render() {
    return (
      <CoinTableRow handleClick={this.handleClick} coin={this.props.coin}/>
    ); 
  }
}

export default withRouter(CoinTableRowContainer);