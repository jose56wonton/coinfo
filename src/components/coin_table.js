import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TablePagination,
  TableRow
} from "material-ui/Table";
import Paper from "material-ui/Paper";
import Head from "./head";

class CoinTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    const { data, order, orderBy, rowsPerPage, page } = this.props;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
    const {
      handleRequestSort,
      handleClick,
      handleChangePage,
      handleChangeRowsPerPage
    } = this.props;
   
    var tableData = null;
    if (data) {
      tableData = data
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map(n => {
          return (
            <TableRow
              hover
              onClick={event => handleClick(event, n.id)}
              tabIndex={-1}
              key={n.id}
            >
              <TableCell>
                {n.name}
              </TableCell>
              <TableCell numeric>
                {n.price_usd}
              </TableCell>
              <TableCell numeric>
                {n.market_cap_usd}
              </TableCell>
              <TableCell numeric>
                {n.percent_change_24h}
              </TableCell>
              <TableCell numeric>
                {n.percent_change_7d}
              </TableCell>
            </TableRow>
          );
        });
    }
    var extraRows = null;
    if (emptyRows) {
      <TableRow style={{ height: 49 * emptyRows }}>
        <TableCell colSpan={6} />
      </TableRow>;
    }

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <Head
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {tableData}
              {extraRows}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  count={data.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  rowsPerPageOptions={[10, 25, 50, 100]}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    );
  }
}

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 400
  },
  tableWrapper: {
    overflowX: "auto"
  }
});
CoinTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CoinTable);
