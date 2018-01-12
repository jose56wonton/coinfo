import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import CoinInfo from '../../components/show/coin_info';
import numeral from 'numeral';
class CoinInfoContainer extends Component { 
 
  render() {
    var coinarr = this.props.coins.filter((ele)=>{
      return ele.symbol === this.props.params.params.name;
    });
    if(!coinarr || coinarr.length === 0)
      return null;
    var coin = coinarr[0];
    coin.price_usd = numeral(coin.price_usd).format('$0,0');
    coin.market_cap_usd = numeral(coin.market_cap_usd).format('$0,0');
    coin["24h_volume_usd"] = numeral(coin["24h_volume_usd"]).format('$0,0');
    coin.available_supply = numeral(coin.available_supply).format('0,0')+" BTC";
    coin.total_supply = numeral(coin.total_supply).format('0,0')+" BTC";
    return(<CoinInfo coin={coin}/>)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    coins: state.coins,
    path: ownProps
  }
}
export default connect(mapStateToProps,actions)(CoinInfoContainer);
