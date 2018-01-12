import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import CoinGraph from "../../components/show/coin_graph";
import CoinOptions from "../../components/show/coin_options";
import moment from "moment";
import Grid from "material-ui/Grid/Grid";
class CoinInfoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "1DAY"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  getDates() {
    switch (this.state.time) {
      case "1DAY":
        return {
          start: moment().subtract(1, "days").toISOString(),
          inc: "15MIN",
          format: "DD MMM H:mm",
          ticks: 6
        };
      case "7DAY":
        return {
          start: moment().subtract(7, "days").toISOString(),
          inc: "2HRS",
          format: "DD MMM H:mm",
          ticks: 7
        };
      case "1MTH":
        return {
          start: moment().subtract(1, "months").toISOString(),
          inc: "8HRS",
          format: "DD MMM H:mm",
          ticks: 10
        };
      case "6MTH":
        return {
          start: moment().subtract(6, "months").toISOString(),
          inc: "3DAY",
          format: "MMM DD, YY",
          ticks: 6
        };
      case "1YRS":
        return {
          start: moment().subtract(1, "years").toISOString(),
          inc: "7DAY",
          format: "MMM DD, YY",
          ticks: 6
        };
      default:
        return {
          start: moment().subtract(1, "days").toISOString(),
          inc: "2MIN",
          format: "DD MMM H:mm",
          ticks: 6
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
  }
  handleChange(event) {
    this.setState({ time: event.target.value }, () => {
      this.props.fetchCoinHistory(
        this.props.params.params.name,
        this.getDates().start,
        this.getDates().inc
      );
    });
  }
  render() {
    const coin = this.props.coins.filter(ele => {
      return ele.symbol === this.props.params.params.name;
    })[0];

    const graphData = this.props.history.map(a => a.price_close).reverse();
    const graphLabel = this.props.history
      .map(a => moment(a.time_close).utc().format(this.getDates().format))
      .reverse();
    if (!coin) {
      return null;
    }

    return (
      <div className="grid-margin">
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <CoinGraph
              graphData={graphData}
              graphLabel={graphLabel}
              ticks={this.getDates().ticks}
            />
          </Grid>
          <Grid item xs={12}>
            <CoinOptions
              coin={coin}
              time={this.state.time}
              handleChange={this.handleChange}
            />
          </Grid>
        </Grid>
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
