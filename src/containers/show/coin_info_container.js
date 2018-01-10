import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import CoinInfo from '../../components/show/coin_info';

class CoinInfoContainer extends Component { 
 
  render() {
    const coin = this.props.coins.filter((ele)=>{
      return ele.symbol === this.props.params.params.name;
    });    
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
