import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import CoinGraph from "../../components/show/coin_graph";
import CoinOptions from "../../components/show/coin_options";
import CoinIntro from "../../components/show/coin_intro";
import moment from "moment";
import Grid from "material-ui/Grid/Grid";
import PaperTile from "../../components/general/paper_tile";
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
          format: "MMM Do h:mm A",
          ticks: 6
        };
      case "7DAY":
        return {
          start: moment().subtract(7, "days").toISOString(),
          inc: "2HRS",
          format: "MMM Do h:mm ",
          ticks: 7
        };
      case "1MTH":
        return {
          start: moment().subtract(1, "months").toISOString(),
          inc: "8HRS",
          format: "MMM Do h:mm ",
          ticks: 10
        };
      case "6MTH":
        return {
          start: moment().subtract(6, "months").toISOString(),
          inc: "3DAY",
          format: "MMM Do, YY",
          ticks: 6
        };
      case "1YRS":
        return {
          start: moment().subtract(1, "years").toISOString(),
          inc: "7DAY",
          format: "MMM Do, YY",
          ticks: 6
        };
      default:
        return {
          start: moment().subtract(1, "days").toISOString(),
          inc: "2MIN",
          format: "h:mm, MMM Do",
          ticks: 6
        };
    }
  }
  componentWillMount() {
    if (this.props.coins.length === 0) {
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
    var content = <div />;
    if (this.props.history.length === 0 && !this.props.fetching.history) {
      content = (
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <PaperTile title="Graph Unavailable D:" para=""/>
          </Grid>
          <Grid item xs={12}>
            <CoinIntro
              coin={coin}
              time={this.state.time}
              handleChange={this.handleChange}
            />
          </Grid>
        </Grid>
      );
    } else {
      content = (
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
      );
    }

    return (
      <div className="grid-margin">        
        {content}        
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    coins: state.coins,
    history: state.history,
    path: ownProps,
    fetching: state.fetching,
    announcement: state.announcement
  };
};
export default connect(mapStateToProps, actions)(CoinInfoContainer);
