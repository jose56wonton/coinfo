import React, { Component } from 'react';
import Nav from '../../components/general/nav';
import {withRouter} from 'react-router';
class NavContainer extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.props.history.push(`/`);
  }
  render() {
    return (
      <Nav handleClick={this.handleClick}/>
    );
  }
}

export default withRouter(NavContainer);