import React from 'react';
import {Line} from 'react-chartjs-2';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import moment from 'moment';
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 1,
  }),
});
function CoinGraph(props){
  const { classes,coin,time,history } = props;
  if(history== null){
    return null;
  }
  const labels = history.map(a => moment(a.time_close).utc().format('MM-DD-YYYY'));
  const dataSet = history.map(a => a.price_close)
  const maxPrice = Math.max(...dataSet) * 1.2;
  const minPrice = Math.min(...dataSet) * .8;
  console.log("coin_graph_container",props,labels,dataSet);
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataSet
      }
    ]
  };
  const options = {
    scales: {
        xAxes: [{
            type: 'time',
          ticks: {
            maxTicksLimit: 10
          }
          
        }],
        yAxes: [{
          ticks: {
              min: minPrice,
              max: maxPrice,
              maxTicksLimit: 6
          }
      }]
    }
}
  
    return (
      <div>
      <Paper className={classes.root} elevation={4}> 
        <Line data={data} options={options}/>
      </Paper>
      </div>
    );
  
};
export default withStyles(styles)(CoinGraph);