
import CoinTable from '../components/coin_table';
import React from 'react';
import * as api from '../api.js';
import * as actions from '../actions';
import { connect } from 'react-redux';

let counter = 0;
function createData() {
  counter += 1;
  return { id: counter, name, calories, fat, carbs, protein };
}

class CoinTableContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      order: 'asc',
      orderBy: 'price',
      selected: {},
      data: [
        createData('BitCoin', 14000, 111111, 67, 4.3),
        createData('Ethereum', 800, 21111111, 51, 4.9),
        createData('Ripple', 1.5, 1111111, 24, 6.0),
        createData('Bitcoin Cash', 21110, 6.0, 24, 4.0),
        createData('Litecoin', 250, 11111, 49, 3.9),
        createData('Cardano', .4, 31111111, 87, 6.5),
        createData('IOTA', 3.6, 9111.0, 37, 4.3)
      ].sort((a, b) => (a.calories < b.calories ? -1 : 1)),
      page: 0,
      rowsPerPage: 10,
    };
  }

  componentWillMount(){
    this.props.getList();
  }
  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    const data =
      order === 'desc'
        ? this.state.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
        : this.state.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

    this.setState({ data, order, orderBy });
  };
  handleClick = (event, id) => {    
    console.log(id);  

    this.setState({ selected: this.state.data[id] });
  };
  handleChangePage = (event, page) => {
    this.setState({ page });
  };
  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  render() {
    return(
    <CoinTable 
    classes={this.props.classes}
    data={this.state.data}
    order={this.state.order}
    orderBy={this.state.orderBy}
    selected={this.state.selected}
    rowsPerPage={this.state.rowsPerPage}
    page={this.state.page}   
    handleRequestSort={this.handleRequestSort}
    handleClick={this.handleClick}
    handleChangePage={this.handleChangePage}
    handleChangeRowsPerPage={this.handleChangeRowsPerPage}
    />
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    coins: state.coins
  }
}
export default connect(mapStateToProps,actions)(CoinTableContainer);
