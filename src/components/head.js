import React from 'react';
import PropTypes from 'prop-types';
import  { 
  TableCell,  
  TableHead,  
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import Tooltip from 'material-ui/Tooltip';

const columnData = [
  { id: 'name', numeric: false, disablePadding: false, label: 'Coin' },
  { id: 'price_usd', numeric: true, disablePadding: false, label: 'Price' },
  { id: 'market_cap_usd', numeric: true, disablePadding: false, label: 'Cap' },
  { id: 'percent_change_24h', numeric: true, disablePadding: false, label: '24h Δ' },
  { id: 'percent_change_7d', numeric: true, disablePadding: false, label: '7d Δ' },
];



class Head extends React.Component {
  static propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };

  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const {  order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          
          {columnData.map(column => {
            return (
              <TableCell
                key={column.id}
                numeric={column.numeric}
                padding={column.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === column.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={order}
                    onClick={this.createSortHandler(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

export default Head;