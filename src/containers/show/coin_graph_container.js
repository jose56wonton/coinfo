import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import CoinGraph from "../../components/show/coin_graph";
import CoinOptions from "../../components/show/coin_options";
import CoinIntro from "../../components/show/coin_intro";
import moment from 'moment';
class CoinInfoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "1DAY"
    };
  }
  getDates(){
    switch(this.state.time){
      case "1DAY":
        return [moment().subtract('days',1).toISOString(), moment().toISOString()];
      case "7DAY":
        return [moment().subtract('days',7).toISOString(), moment().toISOString()];
      case "1MTH":
        return [moment().subtract('months',1).toISOString(), moment().toISOString()];
      case "1YRS":
        return [moment().subtract('years',1).toISOString(), moment().toISOString()];
      case "5YRS":
        return [moment().subtract('years',5).toISOString(), moment().toISOString()];
      default:
        return [moment().subtract('days',1).toISOString(), moment().toISOString()];
    }
  }
  componentDidMount() {
    //this.props.fetchCoinHistory(this.props.params.params.name,this.state.time);
    
    if (this.props.coins) {
      this.props.fetchCoinList();
    }
    
    
    

    this.props.getThatShit(this.props.params.params.name,this.getDates());
  }
  handleChange = event => {
    this.setState({ time: event.target.value });
  };
  render() {
    const coin = this.props.coins.filter(ele => {
      return ele.symbol === this.props.params.params.name;
    })[0];
    
    if (!coin) {
      return null;
    }
    return (
      <div>
        <CoinIntro coin={coin} />
        <CoinGraph coin={coin} history={this.props.history} time={this.state.time} />
        <CoinOptions time={this.state.time} handleChange={this.handleChange} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    coins: state.coins,
    history: state.history,
    path: ownProps
  };
};
export default connect(mapStateToProps, actions)(CoinInfoContainer);
