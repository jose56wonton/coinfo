import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import CoinGraph from "../../components/show/coin_graph";
import CoinOptions from "../../components/show/coin_options";
import CoinIntro from "../../components/show/coin_intro";
import Typography from 'material-ui/Typography';
class CoinInfoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "1DAY"
    };
  }
  componentDidMount() {
    //this.props.fetchCoinHistory(this.props.params.params.name,this.state.time);
    if (this.props.coins) {
      this.props.fetchCoinList();
    }
    
  }
  handleChange = event => {
    this.setState({ time: event.target.value });
  };
  render() {
    const coin = this.props.coins.filter(ele => {
      return ele.symbol === this.props.params.params.name;
    });
    if (!coin[0]) {
      return null;
    }

    return (
      <div>
        <CoinIntro coin={coin} />
        <CoinGraph coin={coin} />
        <CoinOptions time={this.state.time} handleChange={this.handleChange} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    coins: state.coins,
    path: ownProps
  };
};
export default connect(mapStateToProps, actions)(CoinInfoContainer);
