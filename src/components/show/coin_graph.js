import React from "react";
import { Line } from "react-chartjs-2";
import Paper from "material-ui/Paper";
import { withStyles } from "material-ui/styles";
import PropTypes from 'prop-types';
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16
  })
});

function CoinGraph(props) {
  const { classes, graphLabel, graphData } = props;

  const data = {
    labels: graphLabel,
    datasets: [
      {
        label: "Nice",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#80d0c7",
        borderColor: "#13547a",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#13547a",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#13547a",
        pointHoverBorderColor: "#80d0c7",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: graphData
      }
    ]
  };
  const options = {
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    scales: {
      xAxes: [
        {
          ticks: {
            autoSkip: false,
            callback: function(value, index, values) {
              if (index % 5 === 0) return value;
              else return "";
            }
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            maxTicksLimit: 6
          }
        }
      ]
    }
  };

  return (
    <Paper className={classes.root} elevation={4}>
      <Line data={data} options={options} />    
    </Paper>
  );
}
CoinGraph.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(CoinGraph);
