import React, { Component } from 'react';
import Nav from '../../components/general/nav';
import {withRouter} from 'react-router';
import { connect } from 'react-redux';
class NavContainer extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.props.history.push(`/coinfo`);
  }
  render() {
    return (
      <Nav fetching={this.props.fetching} handleClick={this.handleClick}/>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    fetching: state.fetching
  }
}
export default connect(mapStateToProps)(withRouter(NavContainer));