import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import CoinGraph from "../../components/show/coin_graph";
import CoinOptions from "../../components/show/coin_options";
import CoinIntro from "../../components/show/coin_intro";
import moment from "moment";
class CoinInfoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "1DAY"
    };
  }
  getDates() {
    switch (this.state.time) {
      case "1DAY":
        return {
          start: moment().subtract("days", 1).toISOString(),
          inc: "15MIN",
          format: "DD MMM H:mm"
        };
      case "7DAY":
        return {
          start: moment().subtract("days", 7).toISOString(),
          inc: "2HRS",
          format: "DD MMM H:mm"
        };
      case "1MTH":
        return {
          start: moment().subtract("months", 1).toISOString(),
          inc: "8HRS",
          format: "DD MMM H:mm"
        };
      case "1YRS":
        return {
          start: moment().subtract("years", 1).toISOString(),
          inc: "7DAY",
          format: "MMM DD, YY"
        };
        return [];
      case "5YRS":
        return {
          start: moment().subtract("years", 5).toISOString(),
          inc: "1MTH",
          format: "MMM DD, YY"
        };
      default:
        return {
          start: moment().subtract("days", 1).toISOString(),
          inc: "15MIN",
          format: "DD MMM H:mm"
        };
    }
  }
  componentDidMount() {
    //this.props.fetchCoinHistory(this.props.params.params.name,this.state.time);

    if (this.props.coins) {
      this.props.fetchCoinList();
    }
    this.props.fetchCoinHistory(
      this.props.params.params.name,
      this.getDates().start,
      this.getDates().inc
    );
    //this.props.getThatShit(this.props.params.params.name,this.getDates()[0],this.getDates()[1],this.state.time);
  }
  handleChange = event => {
    this.setState({ time: event.target.value });
  };
  render() {
    const coin = this.props.coins.filter(ele => {
      return ele.symbol === this.props.params.params.name;
    })[0];

    const graphData = this.props.history.map(a => a.price_close).reverse();
    const graphLabel = this.props.history.map(a => moment(a.time_close).utc().format(this.getDates().format)).reverse();
    if (!coin ) {
      return null;
    }
    return (
      <div>
        <CoinIntro coin={coin} />
        <CoinGraph
          graphData={graphData}
          graphLabel={graphLabel}
        />
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
