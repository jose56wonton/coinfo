
import CoinTable from '../components/coin_table';
import React from 'react';
import * as api from '../api.js';
import * as actions from '../actions';
import { connect } from 'react-redux';



class CoinTableContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      order: 'asc',
      orderBy: 'market_cap_usd',
      selected: {},
      
      page: 0,
      rowsPerPage: 10,
    };
  }

  componentWillMount(){
    this.props.fetchCoinList(); 
  }
  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';
    console.log(property);
    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }
    this.props.sortCoinList(order,orderBy);  

    this.setState({ order, orderBy });
  };
  handleClick = (event, id) => {    
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
    data={this.props.coins}
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