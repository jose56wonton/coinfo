import React, { Component } from 'react';
import CoinTableRow from '../../components/index/coin_table_row';
import {withRouter} from 'react-router';
import numeral from 'numeral';
class CoinTableRowContainer extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(symbol){
    this.props.history.push(`/coinfo/${symbol}`);
  }
  render() {     
    var coin = {...this.props.coin};
    console.log("row container",this.props.coin);
    coin.price_usd = numeral(coin.price_usd).format('$0,0');
    coin.market_cap_usd = numeral(coin.market_cap_usd).format('$0,0');
    coin.percent_change_24h = numeral(coin.percent_change_24h).format('0,0.0')+"%";
    coin.percent_change_7d = numeral(coin.percent_change_7d).format('0,0.0')+"%";
    return (
      <CoinTableRow handleClick={this.handleClick} coin={coin}/>
    ); 
  }
}

export default withRouter(CoinTableRowContainer);