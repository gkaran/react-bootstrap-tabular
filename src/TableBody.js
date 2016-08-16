import React from 'react';
import TableRow from './TableRow';

class TableBody extends React.Component {

  renderRows() {
    return this.props.data.map(entry => (
      <TableRow
        columns={this.props.columns}
        row={entry}
      />
    ));
  }

  render() {
    return (
      <tbody>
      {this.renderRows()}
      <TableRow row={this.props.totals} columns={this.props.columns} totals />
      </tbody>
    );
  }
}

TableBody.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  columns: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  totals: React.PropTypes.arrayOf(React.PropTypes.object),
};

TableBody.defaultProps = {
  totals: [],
};

export default TableBody;
