import React from 'react';

class TableCell extends React.Component {

  render() {
    return (
      <td>
        {this.props.format ? this.props.format(this.props.cell, this.props.row) : this.props.cell}
      </td>
    );
  }

}

TableCell.propTypes = {
  cell: React.PropTypes.oneOf(
    React.PropTypes.string, React.PropTypes.number
  ).isRequired,
  row: React.PropTypes.arrayOf(React.PropTypes.oneOf(
    React.PropTypes.string, React.PropTypes.number
  )).isRequired,
  format: React.PropTypes.func,
};

export default TableCell;
